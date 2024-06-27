import React, { useState } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { Link } from 'react-router-dom'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import CollectionsModal from '../components/CollectionsModal.jsx';

const CollectionsPage = () => {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("");
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => {
    setOpen(false);
    setCategory("");
  }
  return (
    <>
        <div className="heroCarousel">
            <Carousel autoPlay={true} emulateTouch={true} showStatus={false} infiniteLoop={true} renderIndicator={false} showThumbs={false}>
                <div>
                    <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719213423/h35mb6cimcp3wndfixzx.png' alt="banner1" />
                </div>
                <div>
                    <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719213428/v0jylwtyttjh0xacj6fv.png' alt="banner2" />
                </div>
                <div>
                    <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719213431/ivefrayeox3wpg8f0h3t.png' alt="banner3" />
                    
                </div>
            </Carousel> 
        </div>
        <div className="explore-text">
          <div className="explore"><p>EXPLORE</p></div>
          <div className="collection"><p>Our Collection!</p></div>
        </div>
        <div className="card-container-collections">
            <div className="row">
                <div className="card" onClick={() => {
                  setCategory("necklaces");
                  onOpenModal();
                }}>
                    <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719213507/cxvzlbuclo8ppseivvsa.png' alt="Necklaces" />
                    <h3>Necklaces</h3>
                  
                </div>
                <div className="card" onClick={() => {
                  setCategory("womensRings");
                  onOpenModal();
                }}>
                    <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719213512/vlrvg7if0eebq5h4pavc.png' alt="Rings" />
                    <h3>Women's Rings</h3>
                </div>
                <div className="card" onClick={() => {
                  setCategory("womensBracelets");
                  onOpenModal();
                }}>
                    <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719213420/puikuigokzrfmbifn3xa.png' alt="Bracelets" />
                    <h3>Women's Bracelets</h3>
                </div>
            </div>
            <div className="row">
                <div className="card" onClick={() => {
                      setCategory("pendantSets");
                      onOpenModal();
                    }}>
                    <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719213510/hwpqxwbauorgb1j4dkzz.png' alt="Pendant Sets" />
                    <h3>Pendant Sets</h3>
                </div>
                <div className="card" onClick={() => {
                  setCategory("earrings");
                  onOpenModal();
                }}>
                    <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719213437/du9e89gkhi37gzo1qeiy.png' alt="Earrings" />
                    <h3>Earrings</h3>
                </div>
                <div className="card" onClick={() => {
                  setCategory("silverOrnaments");
                  onOpenModal();
                }}>
                    <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719213520/pc1xklafieiuis1n5rqq.png' alt="Silver Ornaments" />
                    <h3>Silver Ornaments</h3>
                </div>
            </div>
            <div className="row">
                <div className="card" onClick={() => {
                      setCategory("mensRings");
                      onOpenModal();
                    }}>
                    <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719387876/o8erqkb6g7rgkmznmhwh.png' alt="Silver Ornaments" />
                    <h3>Men's Rings</h3>
                </div>
                <div className="card" onClick={() => {
                  setCategory("mensChains");
                  onOpenModal();
                }}>
                    <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719387876/lfwirqcwxjhzby56koce.png' alt="Silver Ornaments" />
                    <h3>Men's Chains</h3>
                </div>
                <div className="card" onClick={() => {
                  setCategory("mensBracelets");
                  onOpenModal();
                }}>
                    <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719387876/fy4xziammyk5aiuxfrxq.png' alt="Silver Ornaments" />
                    <h3>Men's Bracelets</h3>
                </div>
            </div>
            <div className="row">
                <div className="card" onClick={() => {
                      setCategory("goldWatches");
                      onOpenModal();
                    }}>
                    <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719387876/chc74magcqs00ffjtaab.png' alt="Silver Ornaments" />
                    <h3>Gold Watches</h3>
                </div>
            </div>
        </div>

        <Modal open={open} onClose={onCloseModal} center>
          <CollectionsModal category={category}></CollectionsModal>
        </Modal>
    </>
  )
}

export default CollectionsPage