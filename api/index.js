
const handleGeoSuccess = (position) => {
    console.log(position);
};

const handleGeoError = () => {
    console.log("못찾겠음");
};

const loadCoord = () => {
    const coord = navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);

};

const init = () => {
    loadCoord();
};

init();