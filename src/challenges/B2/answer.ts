/**
 * In this challenge, you have to get all the categories from the events. The categories 
 * must be unique and sorted from A to Z.
 * 
 * @param events List of events with their categories
 * @returns All existing categories sorted alphabatically without duplicates (A to Z)
 */

// ↓ uncomment bellow lines and add your response!

export default function ({ events }: { events: EventWithCategory[] }): string[] {
    const tabCategories: string[] = [];

    const categories = events.map(event => {

        event.categories.map(categorie => {

            if(!tabCategories.includes(categorie)) {
                tabCategories.push(categorie);
            }
        })
    });

    // object set
    
    return tabCategories.sort();
}


// used interfaces, do not touch
export interface EventWithCategory {
    startDatetime: string;
    endDatetime: string;
    event: string;
    categories: string[];
}
