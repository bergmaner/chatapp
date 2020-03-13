const style = theme => ({
    paper: {
        padding: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width:'40vw',
        minWidth:'400px'
        
        
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
        padding:theme.spacing(3),
        fontSize:"2em"
      },
      login:{
          display:'block',
          textAlign:'center',
         
      }
});
  
  export default style;