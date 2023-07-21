import csv
import random


# Data to be written in the CSV file
index = 1
indianFnames = ["Aditya", "Arya", "Aarna", "Aarav", "Aisha", "Amit", "Aaliyah", "Aaditya", "Ananya", "Amitabh", "Aryan", "Anika", "Aryan", "Anjali", "Aarush", "Avni", "Ayaan", "Aisha", "Amita",
         "Bhavya", "Bharat", "Bhumika", "Bhavika", "Brijesh", "Bianca", "Bina", "Babita", "Brijmohan", "Bhavesh", "Bansi", "Bhuvan", "Bhagirath", "Bhavana", "Babli", "Bhupendra", "Bhairav", "Bhanupriya", "Bhawna", "Birbal",
         "Caden", "Chandni", "Chetan", "Chirag", "Chitra", "Chhavi", "Chinmay", "Chitvan", "Chandrika", "Chakravarthy", "Charu", "Charvi", "Chandra", "Chandresh", "Chetna", "Chiranjeevi", "Chirayu", "Chitrakshi", "Chitralekha",
         "Devanshi", "Dharmesh", "Dhanashree", "Dinesh", "Dipesh", "Divya", "Dhwani", "Dhananjay", "Deeksha", "Dev", "Dhruvesh", "Dhara", "Dhiren", "Darshan", "Daksh", "Dhwanit", "Drishti", "Dharmik", "Dharmendra", "Daman",
         "Ekta", "Esha", "Eva", "Eka", "Eshita", "Eli", "Eshani", "Eshana", "Elina", "Eshwari", "Eshita", "Eshna", "Eshitha", "Ezhil", "Eshwarya", "Ela", "Eshanya", "Ena", "Elakkiya",
         "Falguni", "Farhan", "Fatima", "Firoz", "Fiza", "Fouzia", "Fuzail", "Fahim", "Fareed", "Fathima", "Fawad", "Fazal", "Fazila", "Fazlur", "Fazil", "Firdaus", "Firoza", "Fizaan", "Fahmida", "Faizan",
         "Gaurav", "Garima", "Girish", "Gopal", "Gopika", "Gouri", "Gulshan", "Gunjan", "Gurdeep", "Gurmeet", "Gurpreet", "Gyan", "Gyatri", "Gyanendra", "Gulab", "Ghanshyam", "Ganesh", "Gajendra", "Geeta", "Geetanjali",
         "Hemant", "Harshita", "Himanshu", "Hina", "Hardik", "Hetal", "Hansa", "Harish", "Honey", "Hari", "Harnoor", "Hitaishi", "Hemlata", "Hinal", "Hariom", "Harshad", "Hema", "Hariharan", "Harishankar", "Harihar",
         "Indira", "Ishita", "Ishwar", "Ishwarlal", "Izhaar", "Izna", "Izumi", "Ibrahim", "Iqbal", "Isha", "Ishtiyaq", "Isira", "Ismat", "Ismayil", "Ismet", "Isra", "Issar", "Iti", "Itishree",
         "Jagrati", "Jahnavi", "Jaishree", "Jalpa", "Jamuna", "Janaki", "Janki", "Jasmin", "Jasveer", "Jaya", "Jayalakshmi", "Jayalaxmi", "Jayanti", "Jayashree", "Jeevika", "Jhanvi", "Jigyasa", "Jinal", "Jinita",
         "Kabir", "Kajal", "Kalpana", "Kamal", "Kanika", "Karan", "Karishma", "Karthik", "Kavita", "Kavya", "Ketan", "Khushi", "Kirti", "Komal", "Kritika", "Krishna", "Krishnan", "Kunal", "Kusum", "Kush",
         "Lakshmi", "Lalit", "Lata", "Leela", "Leena", "Lekha", "Lilavati", "Lina", "Lipi", "Lohit", "Lokesh", "Lopamudra", "Luv", "Luvleen", "Lakshay", "Lakshit", "Lavanya", "Laxman", "Lehar",
         "Mohit", "Manish", "Meera", "Madhav", "Mayank", "Manjari", "Megha", "Manoj", "Mihir", "Mithila", "Madhu", "Mukul", "Mahesh", "Muskaan", "Mukesh", "Manali", "Mohan", "Mansi", "Moumita", "Mohanlal",
         "Naresh", "Neha", "Nandini", "Nakul", "Niharika", "Nidhi", "Nishi", "Nisha", "Nivedita", "Naveen", "Nitin", "Nehal", "Nimisha", "Nandita", "Nalini", "Niyati", "Nikita", "Nitin", "Nabila",
         "Omkar", "Ojas", "Oviya", "Oshin", "Om", "Oscar", "Ovi", "Ori", "Ovy", "Ojal", "Omesh", "Oriya", "Ojal", "Oishani", "Omisha", "Omeshwar", "Omkari", "Oshma",
         "Pranav", "Pranay", "Prathamesh", "Praveen", "Priya", "Puneet", "Purnima", "Preeti", "Prerana", "Prithvi", "Pallavi", "Pankaj", "Parul", "Parineeti", "Parth", "Paras", "Piyush", "Pushkar", "Pankhuri", "Pari",
         "Riya", "Rahul", "Roshni", "Rajat", "Raman", "Ravindra", "Rani", "Ritika", "Rishi", "Rukhsar", "Renu", "Rajeev", "Radhika", "Raza", "Rajendra", "Rajni", "Roshan", "Ridhi", "Ritvik", "Rashmi", "Rupesh", "Rahat", "Rajiv", "Riyaaz", "Rohit", "Ritisha", "Rudra", "Ritesh", "Raksha",
         "Sanjana", "Shanaya", "Shrishti", "Shruti", "Suman", "Surbhi", "Sarika", "Sakshi", "Sanya", "Sia", "Sadhana", "Siddhi", "Savita", "Sita", "Saraswati", "Sarla", "Simran", "Sukanya", "Sadhika", "Sapna", "Saniya", "Sunita", "Sonal", "Sofia", "Sudha", "Sneha", "Soraya", "Somya", "Smita",
         "Tara", "Tanvi", "Tanya", "Tara", "Tarun", "Tanya", "Tapan", "Tarini", "Tathagat", "Tauseef", "Tejas", "Tejesh", "Tenali", "Teresa", "Tilak", "Tina", "Tisha", "Tulsi", "Tushar", "Twisha",
         "Udaya", "Ujjwal", "Uma", "Umang", "Unnati", "Upendra", "Urmi", "Urvashi", "Usha", "Utkarsh",
         "Vaibhav", "Vandana", "Varsha", "Varun", "Vedant", "Veena", "Vidya", "Vikas", "Vikram", "Vimala", "Vinay", "Vineet", "Vinita", "Vinod", "Vipul", "Vishal", "Vishnu", "Vivek", "Vrinda", "Vyom"]
indianFnames = list(set(indianFnames))
duplicates = set([x for x in indianFnames if indianFnames.count(x) > 1])
print(duplicates)


AmericanFnames =["Aiden", "Amelia", "Andrew", "Avery", "Alexis", "Austin", "Aria", "Adam", "Ashley", "Ariana", "Aubrey", "Abigail", "Alison", "Addison", "Anthony", "Angelina", "Angel", "Alicia", "Archer", "Alyssa", "Ainsley", "Audrey", "Annabelle", "Adalyn", "August", "Alessandra", "Allyson", "Anastasia", "Aurora", "Adrian",
        "Benjamin", "Brielle", "Bryce", "Bridgette", "Bradley", "Bella", "Brent", "Bethany", "Brendan", "Bailey", "Brody", "Barbara", "Blair", "Blake", "Bryant", "Brandy", "Bobby", "Beatrice", "Brett", "Braxton", "Beverly", "Brynn", "Bridger", "Brenda", "Beckett", "Bronson", "Brooklyn", "Bryce", "Bart", "Blaine",
        "Caleb", "Caroline", "Carter", "Cassandra", "Cassidy", "Cecilia", "Chance", "Chandler", "Charity", "Charlene", "Charlotte", "Chase", "Chelsea", "Chester", "Chloe", "Chris", "Christian", "Christina", "Christopher", "Clara", "Clarence", "Claudia", "Clayton", "Clementine", "Clifford", "Clint", "Clyde", "Cody", "Colby", "Cole",
        "David", "Daniel", "Diana", "Derek", "Deborah", "Donald", "Darren", "Dawn", "Dante", "Daisy", "Dax", "Della", "Darnell", "Demi", "Desmond", "Darcy", "Dawson", "Darian", "Dolores", "Darin", "Deon", "Devonte", "Dallas", "Dionne", "Dorothea", "Dempsey", "Deirdre", "Darryl", "Daphne",
        "Gavin", "Gia", "Gideon", "Giselle", "Giuliana", "Gloria", "Grace", "Gracelyn", "Graham", "Grant", "Grayson", "Greer", "Gregory", "Greta", "Gunner", "Gus", "Gwendolyn", "Gwyneth", "Gabriel", "Gabriella", "Garrett", "Genevieve", "George", "Georgia", "Geraldine", "Gibson", "Gilbert", "Giles", "Glen", "Glenn",
        "Haley", "Hayden", "Harper", "Hunter", "Heather", "Harrison", "Hannah", "Holden", "Hazel", "Houston", "Hope", "Harmony", "Holland", "Hampton", "Hadley", "Hollis", "Hayward", "Haven", "Hartley", "Henley", "Holliday", "Huxley", "Hendrix", "Hawthorne", "Hayes", "Harlan", "Hale", "Halston", "Hutton",
        "Kaden", "Kaiden", "Kaleb", "Kaliyah", "Kamden", "Kameron", "Kamila", "Kara", "Karina", "Karter", "Kasey", "Kason", "Kassandra", "Katelyn", "Katherine", "Kathleen", "Katie", "Kayden", "Kayla", "Kaylee", "Keaton", "Keegan", "Keira", "Keith", "Kellan", "Kelly", "Kelsey", "Kenzie", "Kieran",
        "Landon", "Leah", "Leo", "Leon", "Leona", "Leonard", "Leslie", "Levi", "Liam", "Lila", "Liliana", "Lillian", "Lillie", "Lilly", "Lincoln", "Linda", "Lindsay", "Lindsey", "Lisa", "Lisette", "Logan", "Lola", "Loren", "Lorena", "Lorenzo", "Lori", "Louie", "Louis", "Louisa", "Lucas",
        "Madison", "Mason", "Mackenzie", "Maxwell", "Miles", "Makayla", "Marley", "Maverick", "Mckenzie", "Micah", "Mallory", "Megan", "Maurice", "Melanie", "Mercedes", "Milton", "Mina", "Miriam", "Mitchell", "Monica", "Morgan", "Muriel", "Mya", "Myra", "Myles", "Milo", "Maggie", "Marshall", "Marvin", "Matthew",
        "Naomi", "Nate", "Nathan", "Nathaniel", "Navya", "Neal", "Nellie", "Nelson", "Nevaeh", "Nia", "Nicholas", "Nick", "Nico", "Nicole", "Nikki", "Nina", "Noah", "Nolan", "Nora", "Nova", "Nyla", "Nylah", "Nancy", "Nash", "Nasir", "Natalia", "Natalie", "Nathanial", "Natasha",
        "Peyton", "Parker", "Paige", "Presley", "Phoenix", "Porter", "Priscilla", "Pierce", "Pilar", "Paxton", "Pamela", "Phoebe", "Paris", "Phyllis", "Patience", "Preston", "Patricia", "Perla", "Palmer", "Penelope", "Penny", "Payton", "Paula", "Pearl", "Perry", "Pepper", "Petra", "Pierce", "Philomena",
        "Rachel", "Rebecca", "Reese", "Regan", "Reid", "Rhett", "Rhiannon", "Rhys", "Richard", "Rick", "Riley", "River", "Roberta", "Robert", "Robin", "Rocco", "Rodney", "Rogan", "Romeo", "Ronald", "Ronan", "Ronda", "Rose", "Ross", "Rowan", "Rowen", "Roy", "Ruby", "Russell",
        "Samantha", "Sophia", "Sarah", "Scarlett", "Sebastian", "Stella", "Samuel", "Sadie", "Savannah", "Sydney", "Seth", "Sienna", "Saman", "Sariyah", "Sariah", "Sunny", "Suzanne", "Samantha", "Sandra", "Sylvia", "Sariya", "Samanvi", "Shelby", "Sariya", "Sailor", "Safiya", "Sylvie", "Saanvi", "Sloan",
        "Tanner", "Tatum", "Tawny", "Tayla", "Tayler", "Taylor", "Teagan", "Teddy", "Tegan", "Tela", "Telly", "Tenley", "Tennyson", "Teo", "Terrence", "Tessa", "Thalia", "Thea", "Theo", "Theresa", "Thomas", "Thor", "Tiago", "Tiana", "Tiara", "Tiffany", "Tiger", "Tillie", "Timothy",
        "Ella", "Ethan", "Emily", "Evelyn", "Evan", "Ellie", "Ezra", "Eric", "Eliana", "Emmett",
        "Fiona", "Frank", "Faith", "Finnegan", "Felicity", "Foster", "Francesca", "Fletcher", "Finley", "Flint",
        "Ian", "Isaac", "Isla", "Ivy", "Irene", "Isadora", "Ivory", "Iain", "Indigo", "Isaiah",
        "Jackson", "Jasmine", "Jared", "Jason", "Jenna", "Jeremy", "Jessica", "Joanna", "Jonathan", "Jordan",
        "Oliver", "Owen", "Odessa", "Omar", "Ophelia", "Orlando", "Octavia", "Oakley", "Oriana", "Oswald",
        "Wesley", "Willow", "Wyatt", "Wanda", "Winston", "Wendy", "Weston", "Wren", "Wallace", "Winifred"]
AmericanFnames = list(set(AmericanFnames))

fnames = indianFnames+AmericanFnames
duplicates = set([x for x in fnames if fnames.count(x) > 1])
print(duplicates)


koreanFnames =["Haruki", "Sakura", "Kaito", "Yui", "Kazuki", "Miyu", "Kenta", "Arisa", "Takumi", "Kana", "Hiroki", "Yuna", "Yuto", "Miki", "Ryota", "Haruka", "Rina", "Daiki", "Mana", "Tatsuya", "Akane", "Koki", "Riku", "Nana", "Sho", "Kaori", "Jun", "Yui", "Shun"]
koreanFnames = list(set(koreanFnames))


chineseFnames =["Changwei", "Dandan", "Fang", "Guang", "Hong", "Jin", "Kai", "Lan", "Mei", "Ning", "Peizhi", "Qian", "Rui", "Shan", "Tian", "Ushi", "Wei", "Xia", "Yan", "Zhi", "Bing", "Chen", "Dong", "Feng", "Guoliang", "Han", "Jian", "Kun", "Lihua", "Ming"]
chineseFnames = list(set(chineseFnames))
fnames = indianFnames+AmericanFnames


duplicates = set([x for x in fnames if fnames.count(x) > 1])
print(duplicates)
indianLname = [ "Agarwal", "Bhatnagar", "Chakraborty", "Deshmukh", "Ghosh", "Hegde", "Iyer", "Jain", "Kapoor", "Lal", "Mehra", "Naidu", "Oberoi", "Pandey", "Rao", "Sarkar", "Tiwari", "Upadhyay", "Varma", "Wadhwa", "Yadav", "Zaveri", "Choudhary", "Datta", "Gupta", "Iyengar", "Joshi", "Khanna", "Lakshman", "Mukherjee", "Nambiar", "Purohit", "Rastogi", "Sharma", "Thakur", "Varghese", "Wagle", "Xavier", "Chaturvedi", "Dubey", "Goswami", "Inamdar", "Jhaveri", "Kakkar", "Lodha", "Mehta", "Nair", "Padmanabhan", "Rathore", "Sengupta"]
indianLname = list(set(indianLname))

americanLname = ["Adams", "Baker", "Carter", "Davis", "Edwards", "Franklin", "Gonzalez", "Harris", "Irwin", "Jackson", "Kennedy", "Lewis", "Mitchell", "Nelson", "Olson", "Parker", "Quinn", "Roberts", "Smith", "Taylor", "Upton", "Vargas", "Williams", "Xavier", "Young", "Zimmerman", "Anderson", "Bailey", "Cooper", "Dawson", "Evans", "Foster", "Gibson", "Harrison", "Ingram", "Johnson", "Keller", "Lawson", "Moore", "Nichols", "Phillips", "Reed", "Stewart", "Thompson", "Vance", "Walker", "Yates"]
americanLname = list(set(americanLname))


koreanLnames= ["Kim", "Lee", "Park", "Choi", "Kang", "Jung", "Oh", "Jang", "Yoon", "Shin", "Han", "Moon", "Kwon", "Ha", "Jo", "Lim", "Go", "Hong", "Bae", "Seo"]
koreanLnames = list(set(koreanLnames))

chineseLnames = ["Zhao", "Qian", "Sun", "Li", "Wu", "Zheng", "Wang", "Feng", "Chen", "Chu", "Zhu", "Xu", "Ma", "Hu", "Liu", "Jin", "Yang", "Han", "Zhang", "Cao"]
chineseLnames = list(set(chineseLnames))

lnames = indianLname+americanLname


#password =["Aarav@", "12Advait", "Aryan@12", "745Dhruv", "1990Harsh", "7412Ishaan", "23!Kabir", "741Kavya", "Lak@shya", "Manav!!", "Neha123", "Nikhil741", "Pranav852", "Rahul963", "Riya789", "Rohan!2", "Sakshi@123", "Samarth!41", "Sanvi@78", "Vivaan!45"]
role = ['ADMIN', 'PATIENT', 'DOCTOR']
sex = ['Male','Female']

# Special characters and numbers to add
special_chars = ['$', '@','!','&','*']
numbers = list(range(10))
speciality = ['Cardiology', 'Oncology', 'Dermatology','Pediatrics','Neurology','Orthopedics','Gynecology','Urology','Ophthalmology','Psychiatry']
mails = ["@gmail.com", "@yahoo.com", "@outlook.com","@hotmail.com"]
users = []
patients = []

docusers = []
doctors = []


def generateDoctors():
    global index
    for j in range(25):
        urow = []
        urow.append(index)
        special_char = random.choice(special_chars)
        num1 = random.choice(numbers)
        num2 = random.choice(numbers)
        first = random.choice(fnames)
        last = random.choice(lnames)
        pswd = (f'{first}{special_char}{num1}{num2}')
        urow.append(pswd)
        urow.append("doc"+first.lower())
        urow.append('DOCTOR')
        urow.append(False)
        email = random.choice(mails)
        urow.append(first+"@akshara.com")
        docusers.append(urow)

        #id, firstname, lastname, sex, speciality, age, username, "isAccountDisabled", email, "createdAt", "updatedAt", "userId"
        prow = []
        prow.append(index)
        prow.append(first.capitalize())
        prow.append(last.capitalize())
        prow.append(random.choice(sex))
        prow.append(random.choice(speciality))
        num = random.randint(100000000, 999999999)
        age = random.randint(30,75)
        prow.append(age)
        prow.append("doc"+first.lower())
        prow.append(False)
        prow.append(first+"@akshara.com")
        prow.append(index)
        index = index +1
        doctors.append(prow)




#index = 1
def generatePatients(firstnames, lastnames):
    global index
    for j in range(len(firstnames)):
        #users- id,password, username, role, isaccountdisabled, email,
        urow = []
        urow.append(index)
        special_char = random.choice(special_chars)
        num1 = random.choice(numbers)
        num2 = random.choice(numbers)
        pswd = (f'{firstnames[j]}{special_char}{num1}{num2}')
        urow.append(pswd)
        urow.append(firstnames[j].lower())
        urow.append('PATIENT')
        urow.append(False)
        email = random.choice(mails)
        urow.append(firstnames[j]+email)
        users.append(urow)


        #id,firstname, lastname, sex, phone number, emergency, isaccountdiabled, email, userid
        prow = []
        prow.append(index)
        prow.append(firstnames[j].capitalize())
        prow.append(random.choice(lastnames).capitalize())
        prow.append(random.choice(sex))
        num = random.randint(100000000, 999999999)
        age = random.randint(1,95)
        prow.append(age)
        prow.append(num)
        prow.append(num)
        prow.append(False)
        prow.append(firstnames[j]+email)
        prow.append(index)
        index = index +1
        patients.append(prow)




generatePatients(indianFnames,indianLname)
generatePatients(AmericanFnames,americanLname)
generatePatients(koreanFnames,koreanLnames)
generatePatients(chineseFnames,chineseLnames)
generateDoctors()

print("users::", users)
print("\n")
print("\n")
print("patients::", patients)


print("docusers::", docusers)
print("\n")
print("\n")
print('doctor:', doctors)




usql=[]
for i in range(len(users)):
    query = "INSERT INTO public.users(id, password, username, roles, \"isAccountDisabled\", email) VALUES ("
    query = query+str(users[i][0])+", '"+users[i][1]+"','"+users[i][2]+"','"+users[i][3]+"',"+str(users[i][4])+",'"+users[i][5]+"'"
    query = query + ");"
    usql.append(query)

for i in range(len(docusers)):
    query = "INSERT INTO public.users(id, password, username, roles, \"isAccountDisabled\", email) VALUES ("
    query = query+str(docusers[i][0])+", '"+docusers[i][1]+"','"+docusers[i][2]+"','"+docusers[i][3]+"',"+str(docusers[i][4])+",'"+docusers[i][5]+"'"
    query = query + ");"
    usql.append(query)


psql=[]
for i in range(len(patients)):
    query = "INSERT INTO public.patient(id, firstname, lastname, sex, age, phonenumber, emergencycontact, \"isAccountDisabled\", email, \"userId\")VALUES ("
    query = query +str(patients[i][0])+", '"+patients[i][1]+"', '"+patients[i][2]+"', '"+patients[i][3]+"',"+str(patients[i][4])+","+str(patients[i][5])+","+str(patients[i][6])+","+str(patients[i][7])+",'"+str(patients[i][8])+"', "+str(patients[i][9])
    query = query +");"
    psql.append(query)


for i in range(len(doctors)):
    query = "INSERT INTO public.doctor(id, firstname, lastname, sex, speciality, age, username, \"isAccountDisabled\", email, \"userId\")VALUES ("
    query = query +str(doctors[i][0])+", '"+doctors[i][1]+"', '"+doctors[i][2]+"', '"+doctors[i][3]+"','"+str(doctors[i][4])+"',"+str(doctors[i][5])+",'"+str(doctors[i][6])+"',"+str(doctors[i][7])+",'"+str(doctors[i][8])+"', "+str(doctors[i][9])
    query = query +");"
    psql.append(query)

#for i in range(len(psql)):
#    print(psql[i])    
    #print("\n")

with open('uoutput.txt', 'w') as f:
    f.write('\n'.join(usql))
    
with open('poutput.txt', 'w') as f:
    f.write('\n'.join(psql))




