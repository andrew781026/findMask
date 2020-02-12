import DomainCommon from './Common';


const MedicalStoreService = {

    getStores: function () {
        return new Promise((resolve, reject) => {
            return DomainCommon.fetchGet({
                url: `https://raw.githack.com/kiang/pharmacies/master/json/points.json`, // Use this URL in development
                // Use this URL in production : https://rawcdn.githack.com/kiang/pharmacies/2ad9b5595016c63af993852fdf9b90c51496c89b/json/points.json
                resolve, reject
            });
        });
    },

};

export default MedicalStoreService;
