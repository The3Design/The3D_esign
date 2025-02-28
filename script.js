document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        {
            title: "Apache RTR 160 4v 1",
            description: "A High Quality 3D Model of Tvs Apache. (Blender)",
            link: "new01.png",
            image: "new01.png"
        },

        {
            title: "Apache RTR 160 4v 2",
            description: "A High Quality 3D Model of Tvs Apache. (Blender)",
            link: "new1.png",
            image: "new1.png"
        },

        

          
        {
            title: "3D Perfume Bottle",
            description: "3D Product Visualization. (Blender)",
            link: "new2.png",
            image: "new2.png"
        },

         
        {
            title: "3D Mordern Living Room",
            description: "Realistic 3D Interior. (Blender)",
            link: "new3.png",
            image: "new3.png"
        },
        
        
        {
            title: "3D Sunset Window View",
            description: "Realistic 3D Interior. (Blender)",
            link: "new4.png",
            image: "new4.png"
        },


        {
            title: "3D Stylize Living Room",
            description: "Mordern Realistic 3D Interior. (Blender)",
            link: "animation1.png",
            image: "animation1.png"
        },

        

          
        {
            title: "Atom 3D Character",
            description: "Detailed Robotic Character. (Blender)",
            link: "animation2.jpg",
            image: "animation2.jpg"
        },

         
        {
            title: "3D Ticket Kiosk",
            description: "Futuristic Ticket Kiosk. (Blender)",
            link: "animation3.jpg",
            image: "animation3.jpg"
        },
        
        
        {
            title: "3D Energy Drink Product 1 ",
            description: "Product Visualization. (Blender)",
            link: "animation4.jpg",
            image: "animation4.jpg"
        },

        {
            title: "3D Energy Drink Product 2 ",
            description: "Product Visualization. (Blender)",
            link: "animation6.jpg",
            image: "animation6.jpg"
        },
        

         
        {
            title: "A Street Night Scene",
            description: "3D Game Environment. (Blender)",
            link: "animation5.jpeg",
            image: "animation5.jpeg"
        },
    
    
        

        {
            title: "Lord Hanuman 1",
            description: "3D Indian Mythological Lord Hanuman Character. (Blender)",
            link: "animation7.jpg",
            image: "animation7.jpg"
        },
        

         
        {
            title: "Lord Hanuman 2",
            description: "3D Indian Mythological Lord Hanuman Character. (Blender)",
            link: "animation8.jpg",
            image: "animation8.jpg"
        },
    
    
        {
            title: "Lord Hanuman 3",
            description: "3D Indian Mythological Lord Hanuman Character. (Blender)",
            link: "animation9.jpg",
            image: "animation9.jpg"
        },
        

        {
            title: "Lord Hanuman 4",
            description: "3D Indian Mythological Lord Hanuman Character. (Blender)",
            link: "animation10.jpg",
            image: "animation10.jpg"
        },
        

         
        {
            title: "3D Ai Clinic Model",
            description: "3D Futuristic Clinic Visualization With Detailed Interior. (Blender)",
            link: "animation11.jpg",
            image: "animation11.jpg"
        },
    
    
        {
            title: "3D Shampoo Bottle 1",
            description: "Product Visualization With Liquid Simulation. (Blender)",
            link: "animation12.png",
            image: "animation12.png"
        },


        {
            title: "3D Shampoo Bottle 2",
            description: "Product Visualization With Liquid Simulation. (Blender)",
            link: "animation13.jpg",
            image: "animation13.jpg"
        },
        

         
        {
            title: "3D Water Kiosk",
            description: "3D Water Dispensing Machine. (Blender)",
            link: "animation14.jpg",
            image: "animation14.jpg"
        },
    
    
        {
            title: "3D Study Room Interior",
            description: "Stylizes 3D Study Room. (Blender)",
            link: "animation15.jpeg",
            image: "animation15.jpeg"
        },


        {
            title: "Lord Mahadev's Trishul",
            description: "3D Weapon In Himalayan Snow Fall. (Blender + Unity)",
            link: "animation16.jpg",
            image: "animation16.jpg"
        },
        

         
        {
            title: "Ancient Indian Temple",
            description: "3D Indian Temple. [Environment Designing] (Blender)",
            link: "animation17.jpg",
            image: "animation17.jpg"
        },
    
    
        {
            title: "PORSCHE 718 Cayman GT4 RS 1",
            description: "A 3D Hyper Realistic Car Model. (Blender)",
            link: "animation18.jpg",
            image: "animation18.jpg"
        },

        {
            title: "PORSCHE 718 Cayman GT4 RS 2",
            description: "A 3D Hyper Realistic Car Model. (Blender)",
            link: "animation19.jpg",
            image: "animation19.jpg"
        },
        {
            title: "PORSCHE 718 Cayman GT4 RS 3",
            description: "A 3D Hyper Realistic Car Model. (Blender)",
            link: "animation20.jpg",
            image: "animation20.jpg"
        },

         
        {
            title: "3D Perfume Bottle",
            description: "A 3D Perfume Bottle. (Blender)",
            link: "animation21.jpg",
            image: "animation21.jpg"
        },
        
        
        {
            title: "3D Animated Ocean",
            description: "Animated Ocean With Floting Boat. (Blender)",
            link: "animation22.jpg",
            image: "animation22.jpg"
        },
        

         
        {
            title: "3D Indian Female Character 1",
            description: "A Detailed 3D Female Character Model. (Blender) ",
            link: "animation23.jpg",
            image: "animation23.jpg"
        },

        {
            title: "3D Indian Female Character 2",
            description: "A Detailed 3D Female Character Model. (Blender) ",
            link: "animation32.jpeg",
            image: "animation32.jpeg"
        },
    
    
        {
            title: "PORSCHE 911 TURBO S 1",
            description: "Realistic Porsche 911 Model With Environment. (Blender)",
            link: "animation24.jpg",
            image: "animation24.jpg"
        },

        {
            title: "PORSCHE 911 TURBO S 2",
            description: "Realistic Porsche 911 Model With Environment. (Blender)",
            link: "animation26.jpg",
            image: "animation26.jpg"
        },

        {
            title: "3D Mordern Villa",
            description: "3D Exterior Model Designing. (Blender)",
            link: "animation25.jpg",
            image: "animation25.jpg"
        },
        

         {
            title: "3D Chavaprash Bottel",
            description: "Product Designing",
            link: "animation27.png",
            image: "animation27.png"
        },
        

        {
            title: "3D Mobile Clinic Van",
            description: "Fully Equipped 3D Mobile Clinic. (Blender)",
            link: "animation28.jpg",
            image: "animation28.jpg"
        },
        

         
        {
            title: "A Old Indian House",
            description: "Exterior of An Old Indian House. (Blender)",
            link: "animation29.jpeg",
            image: "animation29.jpeg"
        },
    
    
        {
            title: "A Mordern House",
            description: "Exterior of An Mordern Indian House. (Maya)",
            link: "animation30.jpg",
            image: "animation30.jpg"
        },


        {
            title: "Water Bottle Product",
            description: "Product Visualization With Real Time Water Simulation. (Blender)",
            link: "animation33.jpg",
            image: "animation33.jpg"
        },


        {
            title: "Landscape Scenery 1",
            description: "Beautiful Landscape Scenery With Grass Simulation. (Blender)",
            link: "animation34.jpg",
            image: "animation34.jpg"
        },

        {
            title: "Landscape Scenery 2",
            description: "Beautiful Landscape Scenery With Grass Simulation. (Blender)",
            link: "animation36.jpg",
            image: "animation36.jpg"
        },
        

         
        {
            title: "The Riverdell Castel",
            description: "Complex 3D Environment. (Blender)",
            link: "animation35.png",
            image: "animation35.png"
        },
    
    
        {
            title: "Airport / Metro Ticket Kiosk",
            description: "Model of Ticket Kiosk For Metro Station & Airport. (Blender)",
            link: "animation38.png",
            image: "animation38.png"
        },

         
        {
            title: "Flag Hosting",
            description: "3D Flag Simulation Scene. (Blender)",
            link: "animation39.jpeg",
            image: "animation39.jpeg"
        },
        
        
        {
            title: "Blood Reaper",
            description: "A Stylized Game Wepon. (Blender)",
            link: "animation40.jpeg",
            image: "animation40.jpeg"
        },
        

         
        {
            title: "Haunted Castel",
            description: "A 3D Haunted Castel. (Unity)",
            link: "animation41.jpg",
            image: "animation41.jpg"
        },
    
    
        {
            title: "Toyota Fortuner",
            description: "3D Car Model of Toyota Fortuner. (Maya)",
            link: "animation42.jpg",
            image: "animation42.jpg"
        },

        {
            title: "Reflections of Ambition",
            description: "A 3D Model of Pawn And King With Mirror Refliction. (Blender + Photoshop)",
            link: "animation43.png",
            image: "animation43.png"
        },
        

         
        {
            title: "Jhonny Bravo",
            description: "3D Character Modeling. (Maya)",
            link: "animation44.jpg",
            image: "animation44.jpg"
        },
    
    
        {
            title: "Among Us",
            description: "3D Game Character Modeling. (Maya)",
            link: "animation45.jpg",
            image: "animation45.jpg"
        },
        

        {
            title: "Bubbles",
            description: "3D Cartoon Character Modeling. (Maya)",
            link: "animation46.jpg",
            image: "animation46.jpg"
        },
        

         
        {
            title: "Minion",
            description: "3D Cartoon Character Modeling. (Maya)",
            link: "animation47.jpg",
            image: "animation47.jpg"
        },
    
    
        {
            title: "3D Bedroom Interior",
            description: "Realistic Interior. (Blender)",
            link: "animation48.jpg",
            image: "animation48.jpg"
        },


        {
            title: "Teddy Bear",
            description: "Teddy Bear With Hair And Fur Simulation. (Blender)",
            link: "animation49.jpg",
            image: "animation49.jpg"
        },
        

         
        {
            title: "3D Terrain",
            description: "Terrain Creation. (Unity)",
            link: "animation50.png",
            image: "animation50.png"
        },
    
    
        

        {
            title: "RANGE ROVER VELAR 1",
            description: "Car Modeling. (Blender)",
            link: "animation52.jpg",
            image: "animation52.jpg"
        },
        

         
        {
            title: "RANGE ROVER VELAR 2",
            description: "Car Modeling. (Blender)",
            link: "animation53.jpg",
            image: "animation53.jpg"
        },
    
    
        {
            title: "Realistic 3D Environment",
            description: "Enviroment Designing. (Blender)",
            link: "animation54.jpg",
            image: "animation54.jpg"
        },

        {
            title: "Pistol",
            description: "3D Gun Modeling. (Blender)",
            link: "animation55.jpg",
            image: "animation55.jpg"
        },


        
    
        {
            title: "Sword In A Stone",
            description: "3D Weapon Modling With Realistic Environment. (Unity)",
            link: "animation58.jpg",
            image: "animation58.jpg"
        },


        {
            title: "Laser Weapon",
            description: "A Futurestic Weapon. (Blender)",
            link: "animation59.jpeg",
            image: "animation59.jpeg"
        },
    
    
        
    ];

    const projectContainer = document.getElementById("project-container");

    projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");

        projectDiv.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">
                <button>View Project</button>
            </a>
        `;

        projectContainer.appendChild(projectDiv);
    });
});



