const { Router } = require('express')
const BorrowController = require('../controllers/BorrowController')

const router = Router();

router.get('', BorrowController.getBorrowList)
router.get('/:borrow', BorrowController.getBorrow)
router.get('/user/:user' , BorrowController.getListByUserID)
router.get('/book/:book', BorrowController.getListByBookID)

router.post('', BorrowController.createBorrow)
router.put('/:borrow', BorrowController.updateDue)
router.delete('/:borrow', BorrowController.deleteBorrow)

module.exports = router;