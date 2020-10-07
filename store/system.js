export const state = () => ({
  isDialogMesurementOpen: false, 
  backgroundColor: '#fff1f5',
  textColor: '#000000',
})
  
export const mutations = {
  setBackgroundColor (state, backgroundColor) {
    state.backgroundColor = backgroundColor
  },
  setTextColor (state, textColor) {
    state.textColor = textColor
  },
  isDialogOpen (state, isDialogOpen) {
    this.isDialogMesurementOpen = isDialogOpen
  },
}
  
export const getters = {
  isDialogMesurementOpen: s => s.isDialogMesurementOpen,
  backgroundColor: s => s.backgroundColor,
  textColor: s => s.textColor,
}
