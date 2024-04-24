import { CreateProductKS } from './KnowledgeSources.js';

class ControlComponent {
    constructor(blackboard) {
        this.blackboard = blackboard;
        this.knowledgeSources = {
            create: new CreateProductKS(blackboard),
        };
    }

    async processOperations() {
        while (this.blackboard.operationsQueue.length > 0) {
            const operation = this.blackboard.getNextOperation();
            if (!operation) continue;

            const knowledgeSource = this.knowledgeSources[operation.type];
            if (knowledgeSource) {
                try {
                    await knowledgeSource.execute(operation.data);
                    console.log(`[ControlComponent]: Successfully executed operation: ${operation.type}`);
                } catch (error) {
                    console.error(`[ControlComponent]: Error executing operation ${operation.type}: ${error}`);
                }
            } else {
                console.warn(`[ControlComponent]: No knowledge source found for operation type: ${operation.type}`);
            }
        }
    }
}

export default ControlComponent;
