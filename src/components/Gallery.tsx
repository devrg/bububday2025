import { gallery } from '../data/gallery';

const Gallery = () => (
  <section>
    <h2 style={{ textAlign: 'center' }}>Gallery</h2>
    <div className="gallery-grid">
      {gallery.map((img, i) => (
        <img key={i} src={img} />
      ))}
    </div>
  </section>
);
export default Gallery;