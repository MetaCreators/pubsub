export class PubSubManager{
    private static instance: PubSubManager;
    
    private constructor() {
        
    }

    public static getInstance():PubSubManager {
        if (!PubSubManager.instance) {
            PubSubManager.instance = new PubSubManager();
        }
        return PubSubManager.instance
    }

    //is this required ?
    subscribeEmailToPubSub(userId:string) {
        
    }

    forwardMessageToEmailServer(userId:string,trainingId: string) {
        
    }
}