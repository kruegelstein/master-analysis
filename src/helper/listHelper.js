export const getParticipants = (data) => {
  let participantsList = []
  Object.keys(data).forEach(key => {
    const userId = key.slice(0, -2)
    if(participantsList.indexOf(userId) === -1) {
      participantsList.push(userId)
    }
  })
  return participantsList
}
