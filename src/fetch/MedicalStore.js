import DomainCommon from './Common';


const MedicalStoreService = {

    getStores: function () {
        return new Promise((resolve, reject) => {
            return DomainCommon.fetchGet({
                url: 'https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json',
                resolve, reject
            });
        });
    },

};

export default MedicalStoreService;
