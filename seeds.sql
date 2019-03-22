-- This is to clock in and leaves the clock_out blank
INSERT INTO timesheet (date_today,child_Name,guardian_Name,clock_in) 
VALUES (curdate(), "jimmy", "jimmy_dad" , curtime());

-- This is to clock out child
UPDATE timesheet SET clock_out = curtime() WHERE child_Name = "jimmy";


SELECT * FROM timesheet;





-- Replace the child name with the variable that has the actual child name