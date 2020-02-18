const {asyncHandler} = require('../utils/helper');
const TestService = require('../services/test.service');

exports.testRoute = asyncHandler(async (req,res) => {

    let testResponse = await TestService.testService();
    if(!testResponse){
        return HELPER.sendResponse(res, 404, 'Error')
    }


    return HELPER.sendResponse(res, 200, testResponse)
    
});