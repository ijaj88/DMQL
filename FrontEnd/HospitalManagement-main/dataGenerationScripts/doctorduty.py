# -*- coding: utf-8 -*-
"""doctorduty.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/12Akijq2w2Q58BD8mVxKqJenLkuenaDkK
"""

import datetime
import random

# Define start and end dates for duty
start_date = datetime.date(2023, 5, 7)
end_date = datetime.date(2023, 5, 21)

# Define start and end times for duty
start_time = datetime.time(8, 0, 0)
end_time = datetime.time(16, 0, 0)

# Define appointment duration in minutes
appointment_duration = 1

# Define doctor IDs
doctor_ids = range(939, 963)

# Generate 300 INSERT statements
for i in range(1, 301):
    doctor_id = random.choice(doctor_ids)
    duty_date = start_date + datetime.timedelta(days=random.randint(0, (end_date - start_date).days))
    start_datetime = datetime.datetime.combine(duty_date, start_time) + datetime.timedelta(hours=i % 8)
    end_datetime = start_datetime + datetime.timedelta(hours=8)
    
    values = (i, doctor_id, duty_date.strftime('%m/%d/%Y'), start_datetime.strftime('%H:%M:%S'), end_datetime.strftime('%H:%M:%S'), appointment_duration, True, True, True, True, True, True, True)
    
    print(f"INSERT INTO public.doctorduty(id, doctorId, \"dutyDate\", \"startTime\", \"endTime\", \"appointmentDuration\", slot1, slot2, slot3, slot4, slot5, slot6, slot7) VALUES {values};")

