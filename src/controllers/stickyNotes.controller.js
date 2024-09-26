const stickyNoteService = require('../services/stickyNote.service');

const getStickyNotesByCollectionId = async (req, res) => {
  const notesCollection = await stickyNoteService.getStickyNotesByCollectionId(req.params.collectionId)
  
  if (!notesCollection) {
    res.status(404).send({ status: 'NOT_FOUND'})
  }
  
  res.send({ status: 'OK', data: notesCollection })
}

const createStickyNote = async (req, res) => {
  const {
    collectionId,
    content,
    colorTheme,
    positionX,
    positionY
  } = req.body
  
  if (!collectionId ||
    !colorTheme
  ) {
    res.status(400).send({ error: 'Invalid params' })
    return
  }

  const stickyNote = await stickyNoteService.createStickyNote({
    collectionId,
    content,
    colorTheme,
    positionX,
    positionY
  })

  res.send({ status: 'OK', data: stickyNote })
}

const updateStickyNote = async (req, res) => {
  const updatedStickyNote = await stickyNoteService.updateStickyNote({...req.body})

  res.send({ status: 'OK', data: updatedStickyNote })
}

const softDeleteStickyNote = async (req, res) => {
  const isDeleted = await stickyNoteService.softDeleteStickyNote(req.params.id)

  if (isDeleted) {
    res.send({ status: 'OK' })
    return
  }

  res.status(404).send({ status: 'NOT_FOUND' })
}

module.exports = {
  createStickyNote,
  getStickyNotesByCollectionId,
  updateStickyNote,
  softDeleteStickyNote
}