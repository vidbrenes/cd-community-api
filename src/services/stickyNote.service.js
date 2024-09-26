const StickyNote = require('../models/stickyNote.model')

const getStickyNotesByCollectionId = async (collectionId) => {
  const allStickyNotes = await StickyNote.findAll({ where: { collectionId}})
  
  return allStickyNotes
}

const createStickyNote = async (stickyNoteData) => {
  const newStickyNote = await StickyNote.create({...stickyNoteData})

  return newStickyNote;
}

const updateStickyNote = async (stickyNoteData) => {
  const stickyNote = await StickyNote.findOne({ where: { id: stickyNoteData.id }})

  if (stickyNote) {
    await stickyNote.update({...stickyNoteData})
    await stickyNote.save()
    await stickyNote.reload()
 
    return stickyNote;
  }
 
  return null
}

const softDeleteStickyNote = async (stickyNoteId) => {
  const stickyNote = await StickyNote.findOne({ where: { id: stickyNoteId }})

  if (stickyNote) {
    await stickyNote.update({ deletedAt: new Date() })
    await stickyNote.save()
    await stickyNote.reload()
 
    return true;
  }
 
  return null
}

module.exports = {
  getStickyNotesByCollectionId,
  createStickyNote,
  updateStickyNote,
  softDeleteStickyNote,
}