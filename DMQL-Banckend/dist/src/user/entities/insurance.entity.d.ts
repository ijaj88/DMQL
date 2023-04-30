import { patient } from './patient.entity';
import { billingdetails } from './bill.entity';
export declare class InsuranceInfo {
    id: number;
    policyno: number;
    insurancecompany: string;
    patients: patient;
    billing: billingdetails[];
}
