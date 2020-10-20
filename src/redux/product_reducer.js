import product from "../container/product"
import crypto from 'crypto-js';


const initState = {
    adding: false,
    products: [{
      "id": 1,
      "name": "Blackbird, red-winged",
      "price": "$1.81B",
      "description": "enable next-generation vortals",
      "img": "http://dummyimage.com/250x250.jpg/cc0000/ffffff"
    }, {
      "id": 2,
      "name": "Kingfisher, malachite",
      "price": "$2.05B",
      "description": "benchmark impactful communities",
      "img": "http://dummyimage.com/250x250.jpg/ff4444/ffffff"
    }, {
      "id": 3,
      "name": "Cereopsis goose",
      "price": "$59.41M",
      "description": "whiteboard robust partnerships",
      "img": "http://dummyimage.com/250x250.jpg/dddddd/000000"
    }, {
      "id": 4,
      "name": "Lizard, collared",
      "price": "$165.5M",
      "description": "strategize plug-and-play paradigms",
      "img": "http://dummyimage.com/250x250.jpg/ff4444/ffffff"
    }, {
      "id": 5,
      "name": "Ring-tailed coatimundi",
      "price": "$818.25M",
      "description": "empower front-end interfaces",
      "img": "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff"
    }, {
      "id": 6,
      "name": "Savannah deer (unidentified)",
      "price": "n/a",
      "description": "reinvent holistic architectures",
      "img": "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff"
    }, {
      "id": 7,
      "name": "Woodpecker, red-headed",
      "price": "$519.03M",
      "description": "expedite revolutionary solutions",
      "img": "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff"
    }, {
      "id": 8,
      "name": "Golden brush-tailed possum",
      "price": "$3.49M",
      "description": "reinvent best-of-breed platforms",
      "img": "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff"
    }, {
      "id": 9,
      "name": "Elephant, asian",
      "price": "$7.36M",
      "description": "architect proactive mindshare",
      "img": "http://dummyimage.com/250x250.jpg/ff4444/ffffff"
    }, {
      "id": 10,
      "name": "Mexican wolf",
      "price": "$171.78M",
      "description": "envisioneer impactful web-readiness",
      "img": "http://dummyimage.com/250x250.jpg/ff4444/ffffff"
    }, {
      "id": 11,
      "name": "Crowned eagle",
      "price": "n/a",
      "description": "synthesize end-to-end markets",
      "img": "http://dummyimage.com/250x250.jpg/ff4444/ffffff"
    }, {
      "id": 12,
      "name": "Thirteen-lined squirrel",
      "price": "n/a",
      "description": "repurpose holistic e-markets",
      "img": "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff"
    }, {
      "id": 13,
      "name": "Neotropic cormorant",
      "price": "$22.21M",
      "description": "empower real-time paradigms",
      "img": "http://dummyimage.com/250x250.jpg/cc0000/ffffff"
    }, {
      "id": 14,
      "name": "Sloth bear",
      "price": "$27.63M",
      "description": "cultivate interactive metrics",
      "img": "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff"
    }, {
      "id": 15,
      "name": "Snake-necked turtle",
      "price": "$2.21B",
      "description": "redefine innovative bandwidth",
      "img": "http://dummyimage.com/250x250.jpg/ff4444/ffffff"
    }]
}

function encode(data) {
  const pass = decryptPass;
  const encodeInfo = crypto.AES.encrypt(data, pass).toString();
  return encodeInfo;
}

function decrypt (data, passphrase) {
  const bytes = crypto.AES.decrypt(data, passphrase);
  let originalText;
  try {
    originalText = bytes.toString(crypto.enc.Utf8);
  } catch (e) {
    originalText = "";
  }
  return originalText;
}

const decryptPass = 'mb1o4er';

const reducer = (state = initState, action) => {
    switch(action.type) {
        case 'ADDING': {
          if(!localStorage.getItem('isLogin')){
            alert('ban chua dang nhap');
            return state;
          } else {
            if(decrypt(localStorage.getItem('username'), decryptPass) 
                ===
               decrypt(localStorage.getItem('loginCode'), decryptPass))
            {
              return {
                  ...state,
                  adding: true
              }
            }
          }  
        }
        case 'CLOSE': {
            return {
              ...state,
              adding: false
            }
        }
        case 'ADD_PRODUCT': {
          if(action.payload.name !== "" && action.payload.price && action.payload.img){
            return {
                ...state,
                adding: false,
                products: [
                    ...state.products, {...action.payload}
                ]
            }
          }  
        }
        case 'DELETE_PRODUCT': {
          if(!localStorage.getItem('isLogin')){
            alert('ban chua dang nhap');
            return state;
          } 
          else {
          if(decrypt(localStorage.getItem('username'), decryptPass)
              ===
             decrypt(localStorage.getItem('loginCode'), decryptPass))
          {
            const { products } = state;
            return {
                ...state,
                adding: false,
                products: [
                    ...products.slice(0, action.payload.index), 
                    ...products.slice(action.payload.index+1)
                ]
            }
          }
          }
          
        }
        case 'EDIT_PRODUCT': {
          if(localStorage.getItem('isLogin') && 
            decrypt(localStorage.getItem('username'), decryptPass) === decrypt(localStorage.getItem('loginCode'), decryptPass)
            ) {
            return {
                ...state,
                adding: false,
                products: [
                    ...state.products.slice(0,action.payload.index),
                    {...action.payload.product},
                    ...state.products.slice(action.payload.index+1)
                ]
            }
          } else {
            alert('ban chua dang nhap!');
          }
        }
        default:  return state;
    }
}
export default reducer;