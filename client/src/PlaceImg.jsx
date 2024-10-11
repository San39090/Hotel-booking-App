export default function PlaceImg({place,index=0,className=null}){
    if(!place.photos?.length){
        return ''
    }
    if(!className){
        className='object-cover';
    }
    return (
        <img className="object-cover" src={'https://hotel-booking-app-czf3.onrender.com/uploads/'+place.photos[index]} alt="" />
    );
}
