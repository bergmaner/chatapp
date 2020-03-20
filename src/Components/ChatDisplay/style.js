const style = theme => ({
    content: {
        height: '100vh',
        marginLeft: '300px',
        boxSizing: 'border-box',
        width: 'calc(100% - 300px)',
        padding:'25px 0px',
        paddingTop:'50px'
      },
      back : {
        position:'absolute',
        right:'1vw',
        top:'12px',
        cursor: 'pointer',
        '&:hover': {
          color: 'gray'
        }
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
      padding:'12px 16px',
      width: 'calc(100% - 300px)',
      borderRadius: '0px',
      height: '50px',
      backgroundColor: '#3F51B5'
      },
      messagesList:
      {
        gridArea:'messagesList',
        boxSizing:'border-box',
        height:'calc(100% - 25px)',
        display:'flex',
        flexDirection:'column-reverse',
        padding:'25px',
        margin:' 0px',
        width: '100%',
        overflow: 'auto',
        overflowY: 'scroll'
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