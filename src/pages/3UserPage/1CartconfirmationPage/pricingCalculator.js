 //* depending on service and service details, returns a price. Price is then fed above to add into Cart & Order arrays
 //* the data  
 const paintingPrices = {
  'Battle-ready': {
      'Small': {
          'Relaxed': 18,
          'Normal': 20,
          'Urgent': 30,
      },
      'Normal': {
          'Relaxed': 20,
          'Normal': 25,
          'Urgent': 45,
      },
      'Huge': {
          'Relaxed': 70,
          'Normal': 90,
          'Urgent': 120,
      },
  },
  'Artisan-ready': {
      'Small': {
          'Relaxed': 18 * 2,
          'Normal': 20 * 2,
          'Urgent': 30 * 2,
      },
      'Normal': {
          'Relaxed': 20 * 2,
          'Normal': 25 * 2,
          'Urgent': 45 * 2,
      },
      'Huge': {
          'Relaxed': 70 * 2,
          'Normal': 90 * 2,
          'Urgent': 120 * 2,
      },
  },
};

const masterclassPrices = {
  'Masterclass package 1: Hired Tutor': 80,
  'Masterclass package 2: Squire-r-us': 100,
  'Masterclass package 3: Paint-Knight': 150,
  'Masterclass package 4: Paint-Champion': 400,
};

let primingCost = 1; 
const assemblyPrices = {
  'Priming not required': {
      'Small': {
          'Relaxed': 4,
          'Normal': 6,
          'Urgent': 15,
      },
      'Normal': {
          'Relaxed': 5,
          'Normal': 7,
          'Urgent': 15,
      },
      'Huge': {
          'Relaxed': 15,
          'Normal': 18,
          'Urgent': 30,
      },
  },
  'Prime black': {
    'Small': {
        'Relaxed': 4 + primingCost,
        'Normal': 6 + primingCost,
        'Urgent': 15 + primingCost,
    },
    'Normal': {
        'Relaxed': 5 + primingCost,
        'Normal': 7 + primingCost,
        'Urgent': 15 + primingCost,
    },
    'Huge': {
        'Relaxed': 15 + primingCost,
        'Normal': 18 + primingCost,
        'Urgent': 30 + primingCost,
    },
  },
  'Prime white': {
    'Small': {
        'Relaxed': 4 + primingCost,
        'Normal': 6 + primingCost,
        'Urgent': 15 + primingCost,
    },
    'Normal': {
        'Relaxed': 5 + primingCost,
        'Normal': 7 + primingCost,
        'Urgent': 15 + primingCost,
    },
    'Huge': {
        'Relaxed': 15 + primingCost,
        'Normal': 18 + primingCost,
        'Urgent': 30 + primingCost,
    },
  },
  'Prime other colors': {
    'Small': {
        'Relaxed': 4 + primingCost,
        'Normal': 6 + primingCost,
        'Urgent': 15 + primingCost,
    },
    'Normal': {
        'Relaxed': 5 + primingCost,
        'Normal': 7 + primingCost,
        'Urgent': 15 + primingCost,
    },
    'Huge': {
        'Relaxed': 15 + primingCost,
        'Normal': 18 + primingCost,
        'Urgent': 30 + primingCost,
    },
},
};



//* the function 
export default function pricingCalculator(cartObject) {
console.log('this is cartObject', cartObject);
console.log('this is cartObject title', cartObject.title);
const { title, details } = cartObject;

  
  if (title === 'Painting Services' && paintingPrices[details.qualityRequired]) {
    const qualityPrices = paintingPrices[details.qualityRequired];
    const sizePrices = qualityPrices[details.sizeComplexity];
        
    if (sizePrices && sizePrices[details.urgencyRequired]) {
      const pricePerModel = sizePrices[details.urgencyRequired];
      return details.numberOfModels * pricePerModel;
    }
  } else
      
    if (title === 'Masterclass Booking' && masterclassPrices[details.classType]) {
      return masterclassPrices[details.classType];
    } else
      
      if (title === 'Assembly Services' && assemblyPrices[details.primingRequired]) {
        const primingPrices = assemblyPrices[details.primingRequired];
        const sizePrices = primingPrices[details.sizeComplexity];
            
        if (sizePrices && sizePrices[details.urgencyRequired]) {
          const pricePerModel = sizePrices[details.urgencyRequired];
          return details.numberOfModels * pricePerModel;
        }
      } 

    return "Error";
}





//? original code. works but verbose. 
// export default function pricingCalculator(cartObject) {
 
//     console.log('this is cartObject', cartObject);
//     console.log('this is cartObject title', cartObject.title);
 
//     //* pricing for Painting services
//     if (cartObject.title === 'Painting Services') {
//       let pricepermodel = 0; 
//       let artisanPriceMultiplier = 2.00; 
//       console.log('inside Painting services IF condition', cartObject.details);

//       //* Small size, Relaxed urgency, Battle-ready.
//       if (cartObject.details.sizeComplexity === 'Small' & cartObject.details.urgencyRequired === 'Relaxed' & cartObject.details.qualityRequired === 'Battle-ready') {
//         pricepermodel = 18; 
//         return (cartObject.details.numberOfModels * pricepermodel);
//       } else
//       //* Normal size, Relaxed urgency, Battle-ready.
//       if (cartObject.details.sizeComplexity === 'Normal' & cartObject.details.urgencyRequired === 'Relaxed' & cartObject.details.qualityRequired === 'Battle-ready') {
//         pricepermodel = 20; 
//         return (cartObject.details.numberOfModels * pricepermodel);
//       } else 
//       //* Huge size, Relaxed urgency, Battle-ready.
//       if (cartObject.details.sizeComplexity === 'Huge' & cartObject.details.urgencyRequired === 'Relaxed' & cartObject.details.qualityRequired === 'Battle-ready') {
//         pricepermodel = 70; 
//         return (cartObject.details.numberOfModels * pricepermodel);
//           } else
      
//        //* Small size, Normal urgency, Battle-ready.
//        if (cartObject.details.sizeComplexity === 'Small' & cartObject.details.urgencyRequired === 'Normal' & cartObject.details.qualityRequired === 'Battle-ready') {
//         pricepermodel = 20; 
//         return (cartObject.details.numberOfModels * pricepermodel);
//       } else
//       //* Normal size, Normal urgency, Battle-ready.
//       if (cartObject.details.sizeComplexity === 'Normal' & cartObject.details.urgencyRequired === 'Normal' & cartObject.details.qualityRequired === 'Battle-ready') {
//         pricepermodel = 25; 
//         return (cartObject.details.numberOfModels * pricepermodel);
//       } else 
//       //* Huge size, Normal urgency, Battle-ready.
//       if (cartObject.details.sizeComplexity === 'Huge' & cartObject.details.urgencyRequired === 'Normal' & cartObject.details.qualityRequired === 'Battle-ready') {
//         pricepermodel = 90; 
//         return (cartObject.details.numberOfModels * pricepermodel);
//       } else 
      
//        //* Small size, Urgent urgency, Battle-ready.
//        if (cartObject.details.sizeComplexity === 'Small' & cartObject.details.urgencyRequired === 'Urgent' & cartObject.details.qualityRequired === 'Battle-ready') {
//         pricepermodel = 30; 
//         return (cartObject.details.numberOfModels * pricepermodel);
//       } else
//       //* Normal size, Urgent urgency, Battle-ready.
//       if (cartObject.details.sizeComplexity === 'Normal' & cartObject.details.urgencyRequired === 'Urgent' & cartObject.details.qualityRequired === 'Battle-ready') {
//         pricepermodel = 45; 
//         return (cartObject.details.numberOfModels * pricepermodel);
//       } else 
//       //* Huge size, Urgent urgency, Battle-ready.
//       if (cartObject.details.sizeComplexity === 'Huge' & cartObject.details.urgencyRequired === 'Urgent' & cartObject.details.qualityRequired === 'Battle-ready') {
//         pricepermodel = 120; 
//         return (cartObject.details.numberOfModels * pricepermodel);
//       } else 
      
//       //! ARTISAN-READY
//        //* Small size, Relaxed urgency, Artisan-ready.
//       if (cartObject.details.sizeComplexity === 'Small' & cartObject.details.urgencyRequired === 'Relaxed' & cartObject.details.qualityRequired === 'Artisan-ready') {
//         pricepermodel = 18 * artisanPriceMultiplier; 
//         return (cartObject.details.numberOfModels * pricepermodel);
//       } else
//       //* Normal size, Relaxed urgency, Artisan-ready.
//       if (cartObject.details.sizeComplexity === 'Normal' & cartObject.details.urgencyRequired === 'Relaxed' & cartObject.details.qualityRequired === 'Artisan-ready') {
//         pricepermodel = 20 * artisanPriceMultiplier; 
//         return (cartObject.details.numberOfModels * pricepermodel);
//       } else 
//       //* Huge size, Relaxed urgency, Artisan-ready.
//       if (cartObject.details.sizeComplexity === 'Huge' & cartObject.details.urgencyRequired === 'Relaxed' & cartObject.details.qualityRequired === 'Artisan-ready') {
//         pricepermodel = 70 * artisanPriceMultiplier; 
//         return (cartObject.details.numberOfModels * pricepermodel);
//           } else
      
//        //* Small size, Normal urgency, Artisan-ready.
//       if (cartObject.details.sizeComplexity === 'Small' & cartObject.details.urgencyRequired === 'Normal' & cartObject.details.qualityRequired === 'Artisan-ready') {
//         pricepermodel = 20 * artisanPriceMultiplier; 
//         return (cartObject.details.numberOfModels * pricepermodel);
//       } else
//       //* Normal size, Normal urgency, Artisan-ready.
//       if (cartObject.details.sizeComplexity === 'Normal' & cartObject.details.urgencyRequired === 'Normal' & cartObject.details.qualityRequired === 'Artisan-ready') {
//         pricepermodel = 25 * artisanPriceMultiplier; 
//         return (cartObject.details.numberOfModels * pricepermodel);
//       } else 
//       //* Huge size, Normal urgency, Artisan-ready.
//       if (cartObject.details.sizeComplexity === 'Huge' & cartObject.details.urgencyRequired === 'Normal' & cartObject.details.qualityRequired === 'Artisan-ready') {
//         pricepermodel = 90 * artisanPriceMultiplier; 
//         return (cartObject.details.numberOfModels * pricepermodel);
//       } else 
      
//        //* Small size, Urgent urgency, Artisan-ready.
//        if (cartObject.details.sizeComplexity === 'Small' & cartObject.details.urgencyRequired === 'Urgent' & cartObject.details.qualityRequired === 'Artisan-ready') {
//         pricepermodel = 30 * artisanPriceMultiplier; 
//         return (cartObject.details.numberOfModels * pricepermodel);
//       } else
//       //* Normal size, Urgent urgency, Artisan-ready.
//       if (cartObject.details.sizeComplexity === 'Normal' & cartObject.details.urgencyRequired === 'Urgent' & cartObject.details.qualityRequired === 'Artisan-ready') {
//         pricepermodel = 45 * artisanPriceMultiplier; 
//         return (cartObject.details.numberOfModels * pricepermodel);
//       } else 
//       //* Huge size, Urgent urgency, Artisan-ready.
//       if (cartObject.details.sizeComplexity === 'Huge' & cartObject.details.urgencyRequired === 'Urgent' & cartObject.details.qualityRequired === 'Artisan-ready') {
//         pricepermodel = 120 * artisanPriceMultiplier; 
//         return (cartObject.details.numberOfModels * pricepermodel);
//       }   else 
        
      
//       return "Error"
//     }

//     //* pricing for class booking
//     else if (cartObject.title === 'Masterclass Booking') {
//       console.log('inside Masterclass booking IF condition', cartObject.details);
//       if(cartObject.details.classType === 'Masterclass package 1: Hired Tutor') {return "80"}
//       else if (cartObject.details.classType === 'Masterclass package 2: Squire-r-us') { return "100" }
//       else if (cartObject.details.classType === 'Masterclass package 3: Paint-Knight') { return "150" }
//       else if (cartObject.details.classType === 'Masterclass package 4: Paint-Champion') { return "400" }
//       return "Error"
//     }
      
//     //* pricing for Assembly services 
//     else if (cartObject.title === 'Assembly Services') {
//       let pricepermodel = 0; 
//       let primingCost = 1;
//       console.log('inside Assembly services IF condition', cartObject.details);
//       //* Small size, Relaxed urgency, No priming required.
//       if (cartObject.details.sizeComplexity === 'Small' & cartObject.details.urgencyRequired === 'Relaxed' & cartObject.details.primingRequired === 'Not required') {
//         pricepermodel = 4; 
//         return (cartObject.details.numberOfModels * pricepermodel);
//       } else       
//       //* Normal size, Relaxed urgency, No priming required.
//       if (cartObject.details.sizeComplexity === 'Normal' & cartObject.details.urgencyRequired === 'Relaxed' & cartObject.details.primingRequired === 'Not required') {
//         pricepermodel = 5; 
//         return (cartObject.details.numberOfModels * pricepermodel);
//       } else
//       //* Huge size, Relaxed urgency, No priming required.
//       if (cartObject.details.sizeComplexity === 'Huge' & cartObject.details.urgencyRequired === 'Relaxed' & cartObject.details.primingRequired === 'Not required') {
//         pricepermodel = 15; 
//         return (cartObject.details.numberOfModels * pricepermodel);
//       } else  
      
//       //* Small size, Normal urgency, No priming required.
//       if (cartObject.details.sizeComplexity === 'Small' & cartObject.details.urgencyRequired === 'Normal' & cartObject.details.primingRequired === 'Not required') {
//         pricepermodel = 6; 
//         return (cartObject.details.numberOfModels * pricepermodel);
//       } else       
//       //* Normal size, Normal urgency, No priming required.
//       if (cartObject.details.sizeComplexity === 'Normal' & cartObject.details.urgencyRequired === 'Normal' & cartObject.details.primingRequired === 'Not required') {
//         pricepermodel = 7; 
//         return (cartObject.details.numberOfModels * pricepermodel);
//       } else
//       //* Huge size, Normal urgency, No priming required.
//       if (cartObject.details.sizeComplexity === 'Huge' & cartObject.details.urgencyRequired === 'Normal' & cartObject.details.primingRequired === 'Not required') {
//         pricepermodel = 18; 
//         return (cartObject.details.numberOfModels * pricepermodel);
//       } else     
      
//       //* Small size, Urgent urgency, No priming required.
//       if (cartObject.details.sizeComplexity === 'Small' & cartObject.details.urgencyRequired === 'Urgent' & cartObject.details.primingRequired === 'Not required') {
//         pricepermodel = 6; 
//         return (cartObject.details.numberOfModels * pricepermodel);
//       } else       
//       //* Normal size, Urgent urgency, No priming required.
//       if (cartObject.details.sizeComplexity === 'Normal' & cartObject.details.urgencyRequired === 'Urgent' & cartObject.details.primingRequired === 'Not required') {
//         pricepermodel = 7; 
//         return (cartObject.details.numberOfModels * pricepermodel);
//       } else
//       //* Huge size, Urgent urgency, No priming required.
//       if (cartObject.details.sizeComplexity === 'Huge' & cartObject.details.urgencyRequired === 'Urgent' & cartObject.details.primingRequired === 'Not required') {
//         pricepermodel = 18; 
//         return (cartObject.details.numberOfModels * pricepermodel);
//       } else 
       
//        //* Small size, Urgent urgency, No priming required.
//       if (cartObject.details.sizeComplexity === 'Small' & cartObject.details.urgencyRequired === 'Urgent' & cartObject.details.primingRequired === 'Not required') {
//         pricepermodel = 10; 
//         return (cartObject.details.numberOfModels * pricepermodel);
//       } else       
//       //* Normal size, Urgent urgency, No priming required.
//       if (cartObject.details.sizeComplexity === 'Normal' & cartObject.details.urgencyRequired === 'Urgent' & cartObject.details.primingRequired === 'Not required') {
//         pricepermodel = 15; 
//         return (cartObject.details.numberOfModels * pricepermodel);
//       } else
//       //* Huge size, Urgent urgency, No priming required.
//       if (cartObject.details.sizeComplexity === 'Huge' & cartObject.details.urgencyRequired === 'Urgent' & cartObject.details.primingRequired === 'Not required') {
//         pricepermodel = 30; 
//         return (cartObject.details.numberOfModels * pricepermodel);
//       } else 
        
//       //! priming required
//         //* Small size, Relaxed urgency, Priming required.
//       if (cartObject.details.sizeComplexity === 'Small' & cartObject.details.urgencyRequired === 'Relaxed' & cartObject.details.primingRequired !== 'Not required') {
//         pricepermodel = 4 + primingCost; 
//         return (cartObject.details.numberOfModels * pricepermodel);
//       } else       
//       //* Normal size, Relaxed urgency, Priming required.
//       if (cartObject.details.sizeComplexity === 'Normal' & cartObject.details.urgencyRequired === 'Relaxed' & cartObject.details.primingRequired !== 'Not required') {
//         pricepermodel = 5 + primingCost;
//         return (cartObject.details.numberOfModels * pricepermodel);
//       } else
//       //* Huge size, Relaxed urgency, Priming required.
//       if (cartObject.details.sizeComplexity === 'Huge' & cartObject.details.urgencyRequired === 'Relaxed' & cartObject.details.primingRequired !== 'Not required') {
//         pricepermodel = 15 + primingCost; 
//         return (cartObject.details.numberOfModels * pricepermodel);
//       } else  
      
//       //* Small size, Normal urgency, Priming required.
//       if (cartObject.details.sizeComplexity === 'Small' & cartObject.details.urgencyRequired === 'Normal' & cartObject.details.primingRequired !== 'Not required') {
//         pricepermodel = 6 + primingCost;
//         return (cartObject.details.numberOfModels * pricepermodel);
//       } else       
//       //* Normal size, Normal urgency, Priming required.
//       if (cartObject.details.sizeComplexity === 'Normal' & cartObject.details.urgencyRequired === 'Normal' & cartObject.details.primingRequired !== 'Not required') {
//         pricepermodel = 7 + primingCost;
//         return (cartObject.details.numberOfModels * pricepermodel);
//       } else
//       //* Huge size, Normal urgency, Priming required.
//       if (cartObject.details.sizeComplexity === 'Huge' & cartObject.details.urgencyRequired === 'Normal' & cartObject.details.primingRequired !== 'Not required') {
//         pricepermodel = 18 + primingCost;
//         return (cartObject.details.numberOfModels * pricepermodel);
//       } else     
      
//       //* Small size, Urgent urgency, Priming required.
//       if (cartObject.details.sizeComplexity === 'Small' & cartObject.details.urgencyRequired === 'Urgent' & cartObject.details.primingRequired !== 'Not required') {
//         pricepermodel = 10 + primingCost;
//         return (cartObject.details.numberOfModels * pricepermodel);
//       } else       
//       //* Normal size, Urgent urgency, Priming required.
//       if (cartObject.details.sizeComplexity === 'Normal' & cartObject.details.urgencyRequired === 'Urgent' & cartObject.details.primingRequired !== 'Not required') {
//         pricepermodel = 15 + primingCost;
//         return (cartObject.details.numberOfModels * pricepermodel);
//       } else
//       //* Huge size, Urgent urgency, Priming required.
//       if (cartObject.details.sizeComplexity === 'Huge' & cartObject.details.urgencyRequired === 'Urgent' & cartObject.details.primingRequired !== 'Not required') {
//         pricepermodel = 30 + primingCost;
//         return (cartObject.details.numberOfModels * pricepermodel);
//       } 
    

//       return "Error"
//     }

//   }