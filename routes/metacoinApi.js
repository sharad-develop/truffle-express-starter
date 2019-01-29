/**
 * Contains all the routes for metacoin api invocation
 */
const express = require('express');
const router = express.Router();
const MetaCoinService = require('../services/MetaCoinService');
const metaCoinService = new MetaCoinService();

/**
 * @swagger
 * /accounts:
 *   get:
 *     description: Get Accounts
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Return accounts
 */
router.get("/accounts", async (req,res) => {
    
    const accts = await metaCoinService.getAccounts();
    res.send(accts);

});

/**
 * @swagger
 * /balance:
 *   get:
 *     description: Get Balance
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: account
 *         description: account address
 *         in: query
 *         required: true
 *         schema:
 *          type:string 
 *     responses:
 *       200:
 *         description: Get Account balance
 */
router.get("/balance", async (req,res) => {
    
    const accountBalance = await metaCoinService.getBalance(req.query.account);
    res.send("balance:"+accountBalance);

});

/**
 * @swagger
 * /transfer:
 *   post:
 *     description: Transfer coins
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: accountTransfer
 *         description: Example request {"fromAccount":"0x2FaffacFf30Cbc4f8C8D58357018B59F75efeE53", 
 *                      "toAccount":"0x1da5e3DFdF10Bc1af434d01e3ab76342CAF748C8","amount":10}
 *     responses:
 *       200:
 *         description: Return transaction hash
 */
router.post("/transfer", async (req,res) => {
           const transactionResponse = await metaCoinService.sendCoin(req.body.fromAccount,req.body.amount,req.body.toAccount);
           res.send(transactionResponse);
     
});

module.exports = router;