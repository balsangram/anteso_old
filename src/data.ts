export const citiesData = [
    {
        id: 1,
        cityName: 'Bangalore',
        stateName: 'Karnataka',
        status: { tooltip: 'Active', color: 'success' },
    },
    {
        id: 2,
        cityName: 'Mysure',
        stateName: 'Karnataka',
        status: { tooltip: 'Deactive', color: 'danger' },
    },
];
export const statesData = [
    {
        id: 1,
        stateName: 'Karnataka',
        status: { tooltip: 'Active', color: 'success' },
    },
    {
        id: 2,
        stateName: 'Odisha',
        status: { tooltip: 'Deactive', color: 'danger' },
    },
];
export const itemsData = [
    {
        id: 1,
        name: 'MRI',
        hsnCode: 'HA123',
        price: '10000',
        status: { tooltip: 'Active', color: 'success' },
    },
    {
        id: 2,
        name: 'XYZ',
        hsnCode: 'HAL123',
        price: '15000',
        status: { tooltip: 'Deactive', color: 'danger' },
    },
];
export const clientsData = [
    {
        id: 1,
        name: 'Client 1',
        email: 'client1@gmail.com',
        address: 'Hsr layout, Bangalore, Karnataka',
        phone: '9876576876',
        business: 'Business Name',
        gstNo: 'AX123',
    },
    {
        id: 2,
        name: 'Client 2',
        email: 'client2@gmail.com',
        address: 'Majestic, Bangalore, Karnataka',
        phone: '9877876876',
        business: 'Business Name',
        gstNo: 'AX223',
    },
];
export const engineersData = [
    {
        id: 1,
        name: 'Engineer 1',
        email: 'engineer1@gmail.com',
        phone: '6785436787',
        empId: 'ENG0001',
        role: 'TECHNICIAN',
        tools: ['tool1', 'tool2'],
        status: { tooltip: 'Active', color: 'success' },
    },
    {
        id: 2,
        name: 'Engineer 2',
        email: 'engineer2@gmail.com',
        phone: '7785436787',
        empId: 'ENG0002',
        role: 'TECHNICIAN',
        tools: ['tool10', 'tool2'],
        status: { tooltip: 'Deactive', color: 'danger' },
    },
];
export const toolsData = [
    {
        id: 1,
        name: 'Tool1',
        manufactureDate: '23-02-2002',
        model: 'TOOL0001',
        srNo: 'ABC0001',
        calibrationCertificateNo: 'CAL0001',
        calibrationValidTill: '23-05-2027',
        range: '600',
        toolID: 'TID0001',
    },
    {
        id: 2,
        name: 'Tool2',
        manufactureDate: '23-02-2002',
        model: 'TOOL0002',
        srNo: 'ABC0002',
        calibrationCertificateNo: 'CAL0002',
        calibrationValidTill: '23-05-2027',
        range: '600',
        toolID: 'TID0002',
    },
];
export const dealersAndManufacturers = [
    {
        id: 1,
        customerName: 'Customer 1',
        city: 'Bangalore',
        type: 'Dealer',
        machineAndPrice: ['Xerox-8000', 'scanning-5500'],
    },
    {
        id: 2,
        customerName: 'Customer 2',
        city: 'Bangalore',
        type: 'Dealer',
        machineAndPrice: ['MRI-8000'],
    },
];
export const servicesData = [
    {
        id: 1,
        serviceType: 'Type 1',
        serviceName: 'Service Name',
        status: { tooltip: 'Active', color: 'success' },
    },
    {
        id: 2,
        serviceType: 'Type 2',
        serviceName: 'Service Name',
        status: { tooltip: 'Deactive', color: 'danger' },
    },
];
export const courierCompanies = [
    {
        id: 1,
        companyName: 'XYZ',
        status: { tooltip: 'Deactive', color: 'danger' },
    },
    {
        id: 2,
        companyName: 'ABC',
        status: { tooltip: 'Active', color: 'success' },
    },
];
export const enquiriesData = [
    {
        id: 1,
        Hospitalname:"Apollo Hospital",
        Fulladdress:'123 Medical Street, Health Lane',
        City:"Bangalore",
        State:"Karnataka",
        Pincode:"560001",
        Contactperson:"Dr. Ramesh Kumar",
        Email:"ramesh.kumar@apollo.com",
        Phone:"9876543210",
        Designation:"Chief Medical Officer",
        status: { tooltip: 'Active', color: 'success' },
        // urgency: '',
    },
    {
        id: 2,
        Hospitalname: "Fortis Healthcare",
        Fulladdress: "456 Wellness Road, Green Park",
        City: "Delhi",
        State: "Delhi",
        Pincode: "110016",
        Contactperson: "Dr. Anita Sharma",
        Email: "anita.sharma@fortis.com",
        Phone: "9123456780",
        Designation: "Senior Surgeon",
        status: { tooltip: "Pending", color: "warning" },
    },
    {
        id: 3,
        Hospitalname: "Manipal Hospital",
        Fulladdress: "789 Recovery Ave, Whitefield",
        City: "Bangalore",
        State: "Karnataka",
        Pincode: "560066",
        Contactperson: "Dr. Praveen Rao",
        Email: "praveen.rao@manipal.com",
        Phone: "9012345678",
        Designation: "Medical Director",
        status: { tooltip: "Inactive", color: "danger" },
    },
    {
        id: 4,
        Hospitalname: "Max Super Specialty",
        Fulladdress: "101 Health Blvd, Sector 19",
        City: "Chandigarh",
        State: "Punjab",
        Pincode: "160019",
        Contactperson: "Dr. Neha Verma",
        Email: "neha.verma@maxhealth.com",
        Phone: "9988776655",
        Designation: "Radiologist",
        status: { tooltip: "Active", color: "success" },
    },
];
