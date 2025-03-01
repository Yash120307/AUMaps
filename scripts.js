function searchRoom() {
    const room = document.getElementById('roomInput').value;
    const map = document.getElementById('map');
    if (room) {
        map.innerHTML = `Displaying location for room: ${room}`;
    } else {
        map.innerHTML = 'Please enter a room number or name.';
    }
}

function showMap(block) {
    const map = document.getElementById('map');
    if (block === 'A') {
        map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d951.7054869893708!2d78.6560432!3d17.4203304!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9e1e0ef5e1c7%3A0x83e5954b19cc3208!2sDepartment%20of%20CSE%20-%20Block%20A!5e0!3m2!1sen!2sin!4v1740730471219!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    } else if (block === 'B') {
        map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d951.7054869893708!2d78.6560432!3d17.4203304!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9f74c571ed55%3A0xca958203099b13ad!2sSchool%20Of%20Pharmacy!5e0!3m2!1sen!2sin!4v1740730782766!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    } else if (block === 'C') {
        map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d737.6897851667935!2d78.65606973917272!3d17.42044722614873!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb756e7dc71f53%3A0x23559f808c46f385!2sCivil%20Engineering!5e0!3m2!1sen!2sin!4v1740731074994!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    } else if (block === 'D') {
        map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d777.0578523141783!2d78.65637318830616!3d17.419479446887703!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9e1e1b20d2ad%3A0xfb97132ce50a9b1!2sAnurag%20Group%20of%20Institutions%20D%20Block!5e0!3m2!1sen!2sin!4v1740731398482!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    } else if (block === 'E') {
        map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d963.3216818558591!2d78.65541759242858!3d17.420040998082005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9f18400b6e91%3A0xb27c1e651be57a76!2sDepartment%20of%20ECE%20and%20AI%2C%20Block%20E!5e0!3m2!1sen!2sin!4v1740731714712!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    } else if (block === 'F') {
        map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d777.7890383786337!2d78.65556833922227!3d17.420385931409083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9fa562616459%3A0x54d4f6d5f68c2dd0!2sExaminations%20Branch%2C%20Anurag%20University!5e0!3m2!1sen!2sin!4v1740732032998!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    } else if (block === 'G') {
        map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d262.47785520504647!2d78.6555457733338!3d17.420332584298645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9fe9a66ba9bb%3A0xe6e90e44f2ba2691!2sAnurag%20Library!5e0!3m2!1sen!2sin!4v1740732094871!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    } else if (block === 'H') {
        map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d951.7139871400644!2d78.6556019!3d17.4186994!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9f0051602649%3A0x778e3939ffc01488!2sH-%20Block!5e0!3m2!1sen!2sin!4v1740730913598!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    } else if (block === 'APJ') {
        map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d552.3259549716405!2d78.65743067825593!3d17.419761648627215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb755f8b3e441d%3A0xbe508b89d2d4a30b!2sApj%20abdul%20kalam%20hall%20Anurag%20University!5e0!3m2!1sen!2sin!4v1740732207160!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    } else if (block === 'Mithrama') {
        map.innerHTML ='<iframe src="https