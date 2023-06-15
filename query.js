exports.getallProduct =asyncHandler( async( req,res,next)=>{
    const queryObj = { ...req.query };
    const excludeFields = ["page", "sort", "limit", "fields"];
    excludeFields.forEach((el) => delete queryObj[el]);
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    console.log(JSON.parse(queryStr))
    
    const Products = await productModel.find(JSON.parse(queryStr))
    res.status(200).json({
        success:true,
        data:Products
    })
} )