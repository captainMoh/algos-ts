/**
 * In this challenge, you must sort events chronologically (oldest to latest) based on 
 * their startDatetime prop. If some events have the same startDatetime, then the shortest must appear
 * first
 * 
 * @param events Unsorted list of events
 * @returns Sorted list of events
 */

// ↓ uncomment bellow lines and add your response!

export default function ({ events }: { events: EventDatetime[] }): EventDatetime[] {
    const e = events.sort((a, b) => {
        if (a.startDatetime < b.startDatetime) {
            return -1;
        } else if(a.startDatetime > b.startDatetime) {
            return 1;
        } else if(a.startDatetime === b.startDatetime) {
            const durationA = new Date(a.endDatetime).getTime() - new Date(a.startDatetime).getTime();
            const durationB = new Date(b.endDatetime).getTime() - new Date(b.startDatetime).getTime();
            if (durationA < durationB) {
            return -1;
            }
            if (durationA > durationB) {
            return 1;
            }
        }
        return 0;
        
    });
    return e;
}


// used interfaces, do not touch
export interface EventDatetime {
    startDatetime: string;
    endDatetime: string;
    event: string;
}