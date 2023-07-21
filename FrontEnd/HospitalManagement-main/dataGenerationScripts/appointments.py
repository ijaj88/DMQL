#INSERT INTO public.appointment(id, "createdAt", "updatedAt", "BookingFor", slotnumbder, "doctorId", "patientsId")	VALUES (?, ?, ?, ?, ?, ?, ?);


import random

#2022-11-03 04:24:05

#doctorid = random.randint(939,963)
#patientid = random.randint(1,938)
#bookingLastYear = "2022-"+'{:02d}'.format(random.randint(1,12))+"-"+'{:02d}'.format(random.randint(1,30))+" "+'{:02d}'.format(random.randint(0,12))+":"+'{:02d}'.format(random.randint(0,60))+":"+'{:02d}'.format(random.randint(0,60))
#print(bookingLastYear)

#index = 939

#for i in range(25):
#    index+i
Psychiatry = ['Anxiety Disorders', 'Bipolar Disorder', 'Depression', 'Schizophrenia', 'Substance Abuse Disorder']
Cardiology = ['Coronary artery disease', 'Arrhythmia', 'Heart failure', 'Valvular heart disease', 'Aortic aneurysm']
Oncology = ["Breast Cancer", "Colon Cancer", "Lung Cancer", "Leukemia", "Prostate Cancer"]
Dermatology = ['Acne', 'Eczema', 'Psoriasis', 'Rosacea', 'Skin Cancer']
Pediatrics = ['Acute lymphoblastic leukemia', 'Autism spectrum disorder', 'Cerebral palsy', 'Cystic fibrosis', 'Down syndrome']
Neurology = ['Alzheimer Disease', 'Epilepsy', 'Migraine', 'Multiple Sclerosis', 'Parkinson Disease']
Orthopedics = ['Joint Pain', 'Swelling', 'Stiffness', 'Decreased Range of Motion', 'Weakness']
Gynecology = ['Endometriosis', 'Polycystic Ovary Syndrome (PCOS)', 'Uterine Fibroids', 'Pelvic Inflammatory Disease (PID)', 'Ovarian Cysts']
Urology = ["Urinary Tract Infection", "Kidney Stones", "Prostate Cancer", "Bladder Cancer", "Erectile Dysfunction"]
Ophthalmology =['Glaucoma', 'Cataracts', 'Age-related macular degeneration', 'Retinal detachment', 'Diabetic retinopathy']

data = {  939: 'Psychiatry',    940: 'Cardiology',    941: 'Psychiatry',    942: 'Oncology',    943: 'Psychiatry',    944: 'Urology',    945: 'Cardiology',    946: 'Cardiology',    947: 'Orthopedics',    948: 'Cardiology',    949: 'Neurology',    950: 'Dermatology',    951: 'Pediatrics',    952: 'Gynecology',    953: 'Cardiology',    954: 'Neurology',    955: 'Cardiology',    956: 'Neurology',    957: 'Cardiology',    958: 'Neurology',    959: 'Oncology',    960: 'Dermatology',    961: 'Gynecology',    962: 'Pediatrics',    963: 'Orthopedics'}
blood = ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"]

def medicaldia(d):
    if d == 'Psychiatry':
        return random.choice(Psychiatry)    
    if d == 'Cardiology':
        return random.choice(Cardiology)
    if d == 'Oncology':
        return random.choice(Oncology)
    if d == 'Dermatology':
        return random.choice(Dermatology)
    if d == 'Pediatrics':
        return random.choice(Pediatrics)
    if d == 'Neurology':
        return random.choice(Neurology)
    if d == 'Orthopedics':
        return random.choice(Orthopedics)
    if d == 'Urology':
        return random.choice(Urology)
    if d == 'Ophthalmology':
        return random.choice(Ophthalmology)







#INSERT INTO public.patienthistory(id, medicaldiagnosis, bloodgroup, "isDischarged", "createdAt", "updatedAt", "patientsId", "doctorsId") VALUES (?, ?, ?, ?, ?, ?, ?, ?);

appt = []
his = []
for t in range(900):
    row = []
    row.append(t+1)
    bookingLastYear = "2022-"+'{:02d}'.format(random.randint(1,12))+"-"+'{:02d}'.format(random.randint(1,28))+" "+'{:02d}'.format(random.randint(1,10))+":"+"00:00"
    row.append(bookingLastYear)
    row.append(random.randint(1,7))
    doctorid = random.randint(939,963)
    row.append(doctorid)
    patientid = random.randint(1,938)
    row.append(t+1)
    appt.append(row)
    
    ph = []
    ph.append(t+1)
    data[doctorid]
    medical = medicaldia(data[doctorid])
    ph.append(medical)
    ph.append(random.choice(blood))
    ph.append(True)
    ph.append(patientid)
    ph.append(doctorid)
    his.append(ph)
    print(ph)

#print(appt)


asql=[]
def appoint():   
    for i in range(len(appt)):
        query = "INSERT INTO public.appointment(id, \"BookingFor\", slotnumbder, \"doctorId\", \"patientsId\") VALUES ("
        query = query+ str(appt[i][0]) +", \'"+ appt[i][1] +"\', "+ str(appt[i][2])+", "+ str(appt[i][3])+", "+str(appt[i][4])
        query = query + ");"
        asql.append(query)

hist=[]
def history():
    for i in range(len(his)):
        query = "INSERT INTO public.patienthistory(id, medicaldiagnosis, bloodgroup, \"isDischarged\", \"patientsId\", \"doctorsId\") VALUES ("
        query = query+ str(his[i][0]) +", \'"+ str(his[i][1]) +"\', \'"+ his[i][2]+"\', \'"+ str(his[i][3])+"\', "+str(his[i][4])+", "+str(his[i][5])
        query = query + ");"
        hist.append(query)

appoint()
#print(asql)

history()
#print(hist)

with open('appointmentoutput.txt', 'w') as f:
    f.write('\n'.join(asql))

with open('patientHisoutput.txt', 'w') as f:
    f.write('\n'.join(hist))



#lab:
#appontid = 1 to 900
#INSERT INTO public.patinetservicelab(id, medicinename, "labId", "createdAt", "updatedAt", "patientsId") VALUES (?, ?, ?, ?, ?, ?);


meds = ["Acetaminophen", "Ibuprofen", "Aspirin", "Naproxen", "Diclofenac", "Meloxicam", "Celecoxib", "Indomethacin", "Piroxicam", "Ketorolac", "Codeine", "Tramadol", "Oxycodone", "Hydrocodone", "Morphine", "Fentanyl", "Meperidine", "Methadone", "Lorazepam", "Clonazepam", "Alprazolam", "Diazepam", "Temazepam", "Flurazepam", "Zolpidem", "Eszopiclone", "Ramipril", "Lisinopril", "Enalapril", "Captopril", "Fosinopril", "Benazepril", "Losartan", "Valsartan", "Olmesartan", "Irbesartan", "Candesartan", "Amlodipine", "Nifedipine", "Diltiazem", "Verapamil", "Metoprolol", "Propranolol", "Atenolol", "Carvedilol", "Labetalol", "Prazosin", "Terazosin", "Tamsulosin", "Finasteride", "Dutasteride", "Sildenafil", "Tadalafil", "Vardenafil", "Atorvastatin", "Simvastatin", "Rosuvastatin", "Pravastatin", "Lovastatin", "Fluvastatin", "Ezetimibe", "Gemfibrozil", "Fenofibrate", "Warfarin", "Rivaroxaban", "Apixaban", "Dabigatran", "Clopidogrel", "Aspirin-Dipyridamole", "Cilostazol", "Hydrochlorothiazide", "Furosemide", "Spironolactone", "Triamterene", "Amiloride", "Mannitol", "Dexamethasone", "Prednisone", "Methylprednisolone", "Hydrocortisone", "Fludrocortisone", "Levothyroxine", "Liothyronine", "Methimazole", "Propylthiouracil", "Pioglitazone", "Rosiglitazone", "Metformin", "Glyburide", "Glipizide", "Sitagliptin", "Saxagliptin", "Linagliptin", "Canagliflozin", "Dapagliflozin", "Empagliflozin"]

labtests = ["Complete Blood Count (CBC)", "Blood Glucose Test", "Lipid Profile Test", "Liver Function Test (LFT)", "Kidney Function Test (KFT)", "Thyroid Function Test (TFT)", "Serum Electrolyte Test", "Urine Routine Examination", "Stool Routine Examination", "Semen Analysis", "Hemoglobin A1C Test", "Prothrombin Time (PT) Test", "Activated Partial Thromboplastin Time (APTT) Test", "C-reactive Protein (CRP) Test", "Erythrocyte Sedimentation Rate (ESR) Test", "Rheumatoid Factor (RF) Test", "Antinuclear Antibody (ANA) Test", "Human Chorionic Gonadotropin (hCG) Test", "Alpha-Fetoprotein (AFP) Test", "Beta Human Chorionic Gonadotropin (BhCG) Test", "Prolactin Test", "Testosterone Test", "Estrogen Test", "Follicle-Stimulating Hormone (FSH) Test", "Luteinizing Hormone (LH) Test", "Thyroid-Stimulating Hormone (TSH) Test", "Free Thyroxine (FT4) Test", "Free Triiodothyronine (FT3) Test", "Hepatitis B Surface Antigen (HBsAg) Test", "Hepatitis C Virus (HCV) Test", "Human Immunodeficiency Virus (HIV) Test", "Venereal Disease Research Laboratory (VDRL) Test", "Mantoux Test", "Sputum Examination for Acid-Fast Bacilli (AFB) Test", "Culture and Sensitivity Test", "Gram Stain Test", "Malaria Parasite Test", "Dengue Serology Test", "Widal Test", "Blood Group Test", "Rh Factor Test", "Chest X-Ray Test", "Computed Tomography (CT) Scan", "Magnetic Resonance Imaging (MRI) Scan", "Electrocardiogram (ECG) Test", "Echocardiogram (ECHO) Test", "Pulmonary Function Test (PFT)", "Spirometry Test", "Sleep Study Test"]

injections = ["Adrenaclick Injection", "Buminate 5% Injection", "Ceftriaxone Injection", "Daptomycin Injection", "Epinephrine Injection", "Fondaparinux Injection", "Glatiramer Injection", "Haloperidol Injection", "Imiglucerase Injection", "Jantoven Injection", "Ketorolac Injection", "Leuprolide Injection", "Methotrexate Injection", "Naltrexone Injection", "Octreotide Injection", "Peginterferon Injection", "Quelicin Injection", "Ranibizumab Injection", "Sumatriptan Injection", "Teriparatide Injection", "Ustekinumab Injection", "Vasopressin Injection", "Xgeva Injection", "Yervoy Injection", "Ziconotide Injection", "Abarelix Injection", "Bortezomib Injection", "Cangrelor Injection", "Dexamethasone Sodium Phosphate Injection", "Enbrel Injection", "Fulvestrant Injection", "Granisetron Injection", "Hydrocortisone Sodium Succinate Injection", "Ibandronate Injection", "Jevtana Injection", "Kabiven Injection", "Lidocaine Injection", "Meropenem Injection", "Narcan Injection", "Ocrelizumab Injection", "Palonosetron Injection", "Questran Injection", "Remicade Injection", "Somatropin Injection", "Talc Powder Injection", "Unasyn Injection", "Vancomycin Injection", "Xolair Injection", "Y-site Injection", "Zoledronic Acid Injection", "Alprostadil Injection", "Bumetanide Injection", "Calcium Chloride Injection", "Daptacel Injection", "Epoetin Alfa Injection", "Flumazenil Injection", "Gonadorelin Injection", "Halaven Injection", "Infliximab Injection", "Jentadueto Injection", "Ketamine Injection", "Leflunomide Injection", "Metoclopramide Injection", "Nystatin Injection", "Olanzapine Injection", "Piperacillin Injection", "Quinidine Injection", "Rabeprazole Injection", "Sargramostim Injection", "Temozolomide Injection", "Urokinase Injection", "Vorinostat Injection", "Xigris Injection", "Yohimbine Injection", "Zofran Injection", "Amikacin Injection", "Bupivacaine Injection", "Captopril Injection", "Dacarbazine Injection", "Esmolol Injection", "Famotidine Injection", "Gefitinib Injection", "Hydromorphone Injection", "Imipenem Injection", "Jetrea Injection", "Ketoprofen Injection", "Lactated Ringers Injection", "Morphine Injection", "Nebupent Injection", "Omeprazole Injection", "Pantoprazole Injection", "Quinine Injection", "Ranitidine Injection", "Sufentanil Injection", "Trandolapril Injection", "Valproate Sodium Injection", "Xeloda Injection", "Yondelis Injection", "Zovirax Injection"]

med = meds+injections

ls = []

def labservice():
    for i in range(900):
        row = []
        row.append(i+1)
        row.append(random.choice(med))
        row.append(random.randint(1,49))
        row.append(i+1)
        ls.append(row)

labsql=[]
def inslab():   
    for i in range(len(ls)):
        query = "INSERT INTO public.patinetservicelab(id, medicinename, \"labId\", \"patientsId\") VALUES ("
        query = query+ str(ls[i][0]) +", \'"+ ls[i][1] +"\', "+ str(ls[i][2])+", "+ str(ls[i][3])
        query = query + ");"
        labsql.append(query)



#labservice()
#inslab()
#print(ls)
#print(labsql)

#with open('labserviceoutput.txt', 'w') as f:
#    f.write('\n'.join(labsql))



#INSERT INTO public.patinetservicemedicine(id, "createdAt", "updatedAt", "medicineId", "patientsId") VALUES (?, ?, ?, ?, ?);




medsql = []
def medservice():
    for i in range(900):
        row = []
        row.append(i+1)
        row.append(random.randint(1,195))
        row.append(i+1)
        medsql.append(row)

cinsql=[]
def inslab():   
    for i in range(len(medsql)):
        query = "INSERT INTO public.patinetservicemedicine(id, \"medicineId\", \"patientsId\") VALUES ("
        query = query+ str(medsql[i][0])+", "+ str(medsql[i][1]) +", "+ str(medsql[i][2])
        query = query + ");"
        cinsql.append(query)


#medservice()
#inslab()
#print(medsql)
#print(cinsql)

#with open('medicinesserviceoutput.txt', 'w') as f:
#   f.write('\n'.join(cinsql))