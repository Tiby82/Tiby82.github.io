export const showNotification = (msg)=>{

    const notificationElement = document.querySelector(".notification");
    
        //change the message
    notificationElement.innerHTML = msg;
    
    //notification enter
    notificationElement.classList.add('notif-enter')
    
    //notification leave
    setTimeout(()=>{
        notificationElement.classList.remove('notif-enter');
    }, 2000)
    
    };
    