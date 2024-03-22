function createAccount(initialPin, initialDeposit=0) {
    let balance = initialDeposit;
    let pin = initialPin;
    return {
      checkBalance: function(enteredPin) {
        if (enteredPin !== pin) return "Invalid PIN.";
        return `$${balance}`;
      },
      deposit: function(enteredPin, amount) {
        if (enteredPin !== pin) return "Invalid PIN.";
        balance += amount;
        return `Successfully deposited $${amount}. Current balance: $${balance}.`;
      },
      withdraw: function(enteredPin, amount) {
        if (enteredPin !== pin) return "Invalid PIN.";
        if (balance < amount) return "Withdrawal amount exceeds account balance. Transaction cancelled.";
        balance -= amount;
        return `Successfully withdrew $${amount}. Current balance: $${balance}.`;
      },
      changePin: function(oldPin, newPin) {
        if (oldPin !== pin) return "Invalid PIN.";
        pin = newPin;
        return "PIN successfully changed!";
      }
    };
}

module.exports = { createAccount };