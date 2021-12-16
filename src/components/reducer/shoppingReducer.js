import {types} from "../actions/shoppingActions";

export const shoppingInitialState = {

products: [
  {
        id: 1,
        src: 'https:barilocheturismo.gob.ar/images/news/upload/144_54480854-0594-4512-bbf1-a2a5597709d8.jpg', 
        name: "Bariloche",
        duracion: "4 días 3 noches",
        price: 50000,
        descripcion: "Hotel 4 estrellas, desayuno incluido. Excursión al Cerro Llao Llao." ,
        
    },
  
        {
            id: 2,
            src: 'https:media.traveler.es/photos/613768f04c612f07ec398ef9/master/w_1600,c_limit/158844.jpg',
            name: "Cataratas del Iguazú",
            duracion: "4 días 3 noches",
            price: 45000,
            descripcion: "Hotel 3 estrellas, desayuno incluido. Excursión al Parque Nacional Iguazú.",
            

        },
    
        {
            id: 3,
            src: 'https:volemos.nyc3.digitaloceanspaces.com/blog/wp-content/uploads/2020/08/Imperdibles-de-salta.jpg',
            name: "Salta y Jujuy",
            duracion: "8 días 7 noches",
            price: 80000,
            descripcion: "Hotel 4 estrellas, media pensión. Transporte incluido al Centro cívico.",
            

        },
                    {
            id: 4,
            src: 'https:www.viajesylugares.com/images/showid2/4695105?w=1200&zc=4',
            name: "Puerto Madryn",
            duracion: "6 días 5 noches",
            price: 60000,
            descripcion: "Hotel 3 estrellas, desayuno incluido. Avistaje de ballenas embarcado.",
            

        }
        ],
        
cart:[]
};
export function shoppingReducer(state,action) {
      switch (action.type) {
          case types.ADD_TO_CART: {
          let newItem = state.products.find (product => product.id === action.payload)
                  // console.log(newItem)
                  let itemInCart = state.cart.find((item)=>item.id === newItem.id) 

                  return itemInCart 
                  ? {                                                
                    ...state,
                    cart : state.cart.map ((item) => item.id === newItem.id               
                    ? {...item, quantity : item . quantity + 1 }                            
                    : item                                                                
                    )
                    } 
                 : {
                ...state,          
                 cart: [...state.cart,{...newItem, quantity :1}]                   
                        };
                            }


          case types.REMOVE_ONE_PRODUCT: {
            let itemToDelete = state.cart.find((item)=>item.id === action.payload)

            return itemToDelete.quantity >1
            ? {   
              ...state,
             cart:state.cart.map((item) =>item.id ===action.payload 
            ? {...item,quantity:item.quantity - 1}
        : item    
        )          
      }         
    : {
        ...state,
        cart:state.cart.filter(item=>item.id !== action.payload)
        }
          }
          case types.REMOVE_ALL_PRODUCTS: {
            return {
                ...state,
                cart: state.cart.filter(item=>item.id !== action.payload)
          }
        }
          case types.CLEAR_CART: {
            return shoppingInitialState;
          }
      default:
      return state;
     }
     }