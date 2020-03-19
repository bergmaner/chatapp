const style = theme => ({

    sendButton: {
        color: 'blue',
        cursor: 'pointer',
        '&:hover': {
          color: 'gray'
        }
      },
    
      chatBoxContainer: {
        position: 'absolute',
        bottom: '5px',
        left: '315px',
        boxSizing: 'border-box',
        overflow: 'auto',
        width: 'calc(100% - 300px - 50px)'
      },
    
      chatBox: {
        width: 'calc(100% - 25px)'
      }
    
  });
  
  export default style;