import Product from '../models/productModel.js';

class CreateProductKS {
    constructor(blackboard) {
        this.blackboard = blackboard;
    }

    async execute(productDetails) {
        try {
            const product = new Product(productDetails);
            const savedProduct = await product.save();
            this.blackboard.logAction('Product created successfully');
            this.blackboard.updateProduct(savedProduct); // Update blackboard with new product
        } catch (error) {
            this.blackboard.logAction(`Error creating product: ${error.message}`);
        }
    }
    
}

export { CreateProductKS };
