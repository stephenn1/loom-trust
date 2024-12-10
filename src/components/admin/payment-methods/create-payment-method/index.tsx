import { db } from "@/config/firebase";
import { Button, Input, Inputs } from "@/ui";
import { doc, setDoc } from "firebase/firestore";
import React, { FormEvent, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";

interface CreatePaymentMethodProps {
  refresh: () => void;
}

export default function CreatePaymentMethod({
  refresh,
}: CreatePaymentMethodProps) {
  const [isCreating, setIsCreating] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [numberOfInputFields, setNumberOfInputFields] = useState(1);
  const form = useRef<HTMLFormElement | null>(null);

  //  Handles Form Toggle
  const handleshowFormToggle = () => {
    setNumberOfInputFields(1);
    setShowForm(!showForm);
  };

  //   Handles Adding of more inputs
  const handleAddMoreInputs = () => {
    setNumberOfInputFields((num) => num + 1);
  };

  //   Handles Form Submit Event
  const handleFormSubmission = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsCreating(true);
    const formData = new FormData(e.currentTarget);
    const paymentMethodTitle = formData.get("payment-method-title") as string;
    const chainTypes = [];

    for (let index = 0; index < numberOfInputFields; index++) {
      const title = formData.get(`chain-type-title-${index}`);
      const address = formData.get(`chain-type-address-${index}`);

      chainTypes.push({ title, address });
    }

    const id = uuidv4();

    await setDoc(doc(db, "payment-methods", id), {
      id,
      paymentMethodTitle,
      chainTypes,
    }).then(() => {
      setIsCreating(false);
      refresh();
      form.current?.reset();
      handleshowFormToggle();
    });
  };

  return (
    <>
      <button
        onClick={handleshowFormToggle}
        className="bg-primary text-xs text-white border-primary rounded-lg px-3 py-2 ml-auto"
      >
        Create Payment Method
      </button>
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.5)] z-20 p-5  items-center transition-all ${
          showForm ? "grid" : "hidden"
        }`}
      >
        <div className="bg-white h-[600px] rounded-xl w-full max-w-xl mx-auto overflow-hidden grid grid-rows-[auto_1fr] gap-10">
          <div className="grid grid-flow-col justify-between items-center px-5 sm:px-10 py-3 bg-gray-100 border-b border-gray-300">
            <p className="font-medium text-xl text-black">
              Create Payment Method
            </p>
            <button
              onClick={handleshowFormToggle}
              type="button"
              className="text-xl"
            >
              <IoMdClose />
            </button>
          </div>

          <form
            ref={form}
            onSubmit={handleFormSubmission}
            className="px-5 sm:px-10 grid grid-rows-[auto_1fr_auto] gap-5 overflow-hidden h-full"
          >
            <Input
              type={Inputs.Text}
              name={"payment-method-title"}
              id="payment-method-title"
              label={"Payment Method Title"}
              placeholder={`Enter Payment Method Title E.g: BTC`}
              required
            />

            <div className="grid gap-5 content-start pl-3 pr-3 overflow-y-scroll custom-scroll-bar">
              {[...Array(numberOfInputFields)].map((input, i) => (
                <div key={i} className="relative grid gap-5">
                  <span className="border border-gray-300 border-r-transparent block absolute w-1/2 h-24 -left-3 top-12 rounded-md"></span>
                  <Input
                    type={Inputs.Text}
                    name={`chain-type-title-${i}`}
                    id=""
                    label={"Chain Type"}
                    // hint={"A unique name for this account type"}
                    required
                  />
                  <Input
                    type={Inputs.Text}
                    name={`chain-type-address-${i}`}
                    id=""
                    label={"Address"}
                    // hint={"A unique code/number for this account"}
                    required
                  />
                </div>
              ))}
              <button
                onClick={handleAddMoreInputs}
                type="button"
                className="grid grid-flow-col items-center w-max gap-3 mt-2"
              >
                <span>Add more...</span>
              </button>
            </div>

            <p className="text-error-500">{""}</p>

            <div className="w-full ml-auto max-w-xs grid grid-cols-2 gap-5 pb-5">
              <Button type="button" onClick={handleshowFormToggle}>
                Cancel
              </Button>

              <Button
                isLoading={isCreating}
                disabled={isCreating}
                type="submit"
              >
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
