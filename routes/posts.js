import { Router } from 'express'
import * as postsCtrl from '../controllers/posts.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', postsCtrl.index)


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, postsCtrl.create)
router.delete('/:id', checkAuth, postsCtrl.delete)
router.put('/:id', checkAuth, postsCtrl.update)
router.put('/:id/add-photo', checkAuth, postsCtrl.addPhoto)
router.patch('/:id/like', checkAuth, postsCtrl.like)
router.get('/:id', checkAuth, postsCtrl.show)
router.post('/:id/comments', checkAuth, postsCtrl.createComment)
router.delete('/:id/delete-comment/:commentId', checkAuth, postsCtrl.deleteComment)


export { router }
