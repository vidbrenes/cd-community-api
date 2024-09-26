const express = require('express')
const { createStickyNote, getStickyNotesByCollectionId, updateStickyNote, softDeleteStickyNote } = require('../../../controllers/stickyNotes.controller')

const router = express.Router()

router.route('/')
  .post(createStickyNote)
  .patch(updateStickyNote)

router.get('/:collectionId', getStickyNotesByCollectionId)
router.delete('/:id', softDeleteStickyNote)

module.exports = router