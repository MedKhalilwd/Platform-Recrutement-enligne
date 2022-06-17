//pour test la connection connected ou nn
const socket = io('/');
// socket.emit('join-room',ROOM_ID ,10);
// //connected with other user
// socket.on('user-connected', userId => {
//     console.log('User connected: ' + userId);
// });


const myPeer = new Peer(undefined, {
    host: '/',
    port: '3001',
});


const videoGrid  = document.getElementById('video-grid');
const myvideo = document.createElement('video')

myvideo.muted = true;
const peers = {};

navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,
})
.then(stream => {
    addVideoStream(myvideo, stream);

    //pour afficher les 2 video connecter 
    myPeer.on('call', call =>{
        call.answer(stream)
        const video = document.createElement('video')
        call.on('stream', userVideoStream =>{
            addVideoStream(video, userVideoStream);
        })
    });
    //connected with other user
    socket.on('user-connected', userId =>{
        connectToNewUser(userId, stream)
    })
})

myPeer.on('open', id =>{
    socket.emit('join-room', ROOM_ID, 10)
})

function addVideoStream(video, stream) {
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {
        video.play();
    });
    videoGrid.append(video);

}

function connectToNewUser(userId, stream){
    const call = myPeer.call(userId, stream);
    const video =document.createElement('video')
    call.on('stream', userVideoStream => {
        addVideoStream(video, userVideoStream)
    });
    call.on('close', () => {
        video.remove();
        
    });
    peers[userId] = call;
}



