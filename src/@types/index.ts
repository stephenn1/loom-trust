export enum TransactionStatus {
  Pending = "pending",
  Processing = "processing",
  OnHold = "on-hold",
  Failed = "failed",
  Successful = "successful",
}

export enum TransactionType {
  Deposit = "deposit",
  Withdrawal = "withdrawal",
  Received = "received",
}
