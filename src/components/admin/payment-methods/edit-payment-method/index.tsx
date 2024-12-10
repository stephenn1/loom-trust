import { db } from "@/config/firebase";
import { Button, Input, Inputs } from "@/ui";
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import React, { FormEvent, useState } from "react";
import { IoMdClose } from "react-icons/io";

interface EditPaymentMethodProps {
  id: string;
  title: string;
  numOfChainTypes: { title: string; address: string }[];
  refresh: () => void;
}

export default function EditPaymentMethod({
  id,
  title,
  numOfChainTypes,
  refresh,
}: EditPaymentMethodProps) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [numberOfInputFields, setNumberOfInputFields] = useState(
    numOfChainTypes.length
  );

  //  Handles Form Toggle
  const handleshowFormToggle = () => {
    setShowForm(!showForm);
  };

  //   Handles Adding of more inputs
  const handleAddMoreInputs = () => {
    setNumberOfInputFields((num) => num + 1);
  };

  // Handle's Deleting of the data from the database
  const handleDelete = async () => {
    setIsDeleting(true);
    await deleteDoc(doc(db, "payment-methods", id)).then(() => {
      setIsDeleting(false);
      refresh();
      handleshowFormToggle();
    });
  };

  //   Handles Form Submit Event
  const handleFormSubmission = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsUpdating(true);
    const formData = new FormData(e.currentTarget);
    const paymentMethodTitle = formData.get("payment-method-title") as string;
    const chainTypes = [];

    for (let index = 0; index < numberOfInputFields; index++) {
      const title = formData.get(`chain-type-title-${index}`);
      const address = formData.get(`chain-type-address-${index}`);

      chainTypes.push({ title, address });
    }

    await setDoc(doc(db, "payment-methods", id), {
      id,
      paymentMethodTitle,
      chainTypes,
    }).then(() => {
      setIsUpdating(false);
      refresh();
      handleshowFormToggle();
    });
  };

  return (
    <>
      <button
        onClick={handleshowFormToggle}
        className="bg-primary text-xs text-white border-primary rounded-lg px-3 py-2 mr-auto"
      >
        View Payment Method
      </button>
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.5)] z-20 p-5  items-center transition-all ${
          showForm ? "grid" : "hidden"
        }`}
      >
        <div className="bg-white h-[600px] rounded-xl w-full max-w-xl mx-auto overflow-hidden grid grid-rows-[auto_1fr] gap-10">
          <div className="grid grid-flow-col justify-between items-center px-5 sm:px-10 py-3 bg-gray-100 border-b border-gray-300">
            <p className="font-medium text-xl text-black">
              Edit Payment Method
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
            onSubmit={handleFormSubmission}
            className="px-5 sm:px-10 grid grid-rows-[auto_1fr_auto] gap-5 overflow-hidden h-full"
          >
            <Input
              type={Inputs.Text}
              name={"payment-method-title"}
              id="payment-method-title"
              label={"Payment Method Title"}
              placeholder={`Enter Payment Method Title E.g: BTC`}
              defaultValue={title}
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
                    defaultValue={numOfChainTypes[i]?.title}
                    required
                  />
                  <Input
                    type={Inputs.Text}
                    name={`chain-type-address-${i}`}
                    id=""
                    label={"Address"}
                    defaultValue={numOfChainTypes[i]?.address}
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
              <Button
                type="button"
                isLoading={isDeleting}
                disabled={isDeleting}
                onClick={handleDelete}
              >
                Delete
              </Button>

              <Button
                isLoading={isUpdating}
                disabled={isUpdating}
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
