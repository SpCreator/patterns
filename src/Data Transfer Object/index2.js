interface CommunityAccessCodeDTO {
    id: string;
    property_id: string;
    code: string;
    active: boolean | null;
}

const incomingData = {
    id: 'werwerwer23rc23rc',
    property_id: 'sdfwefwefwef',
    code: 'wrwef34f3c4f',
    active: false,
    resident_id: '3c4c34tc34c34t',
    unit_guest_id: 'sdfw4f342fc34',
    rotation_period_days: 15
};

// Преобразование данных от фронтенда в DTO
const communityAccessCodeDTO: CommunityAccessCodeDTO = {
    id: incomingData.id,
    property_id: incomingData.property_id,
    code: incomingData.code,
    active: incomingData.active,
};
