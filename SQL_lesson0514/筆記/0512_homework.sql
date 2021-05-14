select * from DEPT;

select EMPNO,ENAME,JOB,HIREDATE from EMP;

select DISTINCT JOB from EMP;

select EMPNO AS Emp# ,ENAME AS Employee,JOB AS Job,HIREDATE AS "Hire Date" from EMP;

select ENAME+' ,'+JOB AS "Employe and Title" from EMP;