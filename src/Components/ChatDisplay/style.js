const style = theme => ({
    content: {
        height: '100vh',
        overflow: 'auto',
        marginLeft: '300px',
        boxSizing: 'border-box',
        overflowY: 'scroll',
        width: 'calc(100% - 300px)',
        padding:'25px'
      },
      header:
      {
      boxShadow: '0px 0px 2px black',
      boxSizing:'border-box',
      position:'absolute',
      left:'300px',
      top:'0',
      textAlign:'center',
      color:'#fff',
      padding:'6px 16px',
      width: 'calc(100% - 300px)',
      borderRadius: '0px',
      height: '35px',
      backgroundColor: '#3F51B5'
      },
      messagesList:
      {
        gridArea:'messagesList',
        boxSizing:'border-box',
        height:'calc(100vh - 50px)',
        display:'flex',
        flexDirection:'column-reverse',
        padding:'0 20px'
      },
      
      userMsg: {
        float:'right',
        clear:'both',
        padding: '20px',
        boxSizing: 'border-box',
        wordWrap: 'break-word',
        marginTop: '10px',
        backgroundColor: '#3F51B5',
        color: 'white',
        width: '300px',
        borderRadius: '10px'
      },
    
      friendMsg: {
       
        padding: '20px',
        boxSizing: 'border-box',
        wordWrap: 'break-word',
        marginTop: '10px',
        backgroundColor: '#eee',
        color: '#111',
        width: '300px',
        borderRadius: '10px',
        justifyitems:'start'
      }
});

export default style;