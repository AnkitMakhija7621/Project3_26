class Blackboard {
    constructor() {
        this.operationsQueue = [];   // Queue to store operations
        this.logOfActions = [];      // Log actions for auditing and debugging
        this.products = [];          // Stores the current state of products
    }

    addOperation(operation) {
        if (!operation.type) {
            console.error(`[Blackboard]: Failed to add operation due to missing type`);
            return;
        }
        console.log(`[Blackboard]: Adding operation to queue: ${operation.type}`, operation);
        this.operationsQueue.push(operation);
        this.logAction(`Operation added: ${operation.type}`);
    }

    getNextOperation() {
        if (this.operationsQueue.length === 0) {
            console.log(`[Blackboard]: No operations to process`);
            return null;
        }
        const operation = this.operationsQueue.shift();
        console.log(`[Blackboard]: Processing operation: ${operation.type}`, operation);
        return operation;
    }

    logAction(action) {
        this.logOfActions.push(action);
        console.log(`[Blackboard]: Action logged: ${action}`);
    }

    // Call this method to update the products after a successful operation
    updateProduct(product) {
        this.products.push(product); // Adds the new product to the array
        this.logAction('Product updated in blackboard');
    }

    // Use this method to clear products if necessary
    clearProducts() {
        this.products = [];
    }
}

export default Blackboard;
