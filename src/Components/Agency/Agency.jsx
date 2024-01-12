import './Agency.css'
import Heading from '../Heading/Heading'

export default function Agency() {
  return (
    <div className='agency'>
      <Heading name='TOURS' first_name="TOURS OF" second_name="OUR AGENCY" />
      <div className="agency_contact">
        <div className="image_div" style={{
                  backgroundImage: `url("https://res.cloudinary.com/dcczxntp1/image/upload/t_Banner 16:9/v1704643824/nakkati_dmkj59.jpg")`
                }}></div>
        <div className="details_div">
          <div className="places">
            <p className='Heading_title'>GREEN DAY 1</p>
            <p className='place_detail'>Kakoijana Park, home to the Golden Langur and other rare endangered species</p>
            <p className='view_route'> &rarr; View Route</p>
          </div>

          <div className="places">
            <p className='Heading_title'>WATER DAY 2 </p>
            <p className='place_detail'>Boating and other activities along the banks of the Brahmaputra River</p>
            <p className='view_route'> &rarr; View Route</p>
          </div>

          <div className="places" id='nakkati'>
            <p className='Heading_title'>HILL DAY 3 & 4</p>
            <p className='place_detail'>Hiking and activities at Nakkati Hill, featuring stunning sunrise and sunset views</p>
            <p className='view_route'> &rarr; View Route</p>
          </div>

          <div className="places">
            <p className='Heading_title'>TRADITIONAL DAY 5</p>
            <p className='place_detail'>Garo Pahar and other traditional monuments</p>
            <p className='view_route'> &rarr; View Route</p>
          </div>
            <button className='book_tour'>BOOK TOUR</button>
        </div>
      </div>
    </div>
  )
}
