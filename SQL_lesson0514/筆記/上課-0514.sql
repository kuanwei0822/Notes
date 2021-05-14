select * from EMP;

/* Simple Case */
select empno,ename,job,sal,deptno,
	case deptno
		when 10 then sal*1.2
		when 20 then sal*1.1
		else sal
	end 'dsfxcvx'
from emp;


/* Search Case */
select empno,ename,job,sal,deptno,
	case
		when sal <= 1500 then sal*0.05
		when sal > 1500 and sal <= 2000 then sal*0.06
		when sal > 2001 and sal <= 3000 then sal*0.1
		else sal*0.15
	end 'Tex'
from emp;


/* �[�J where ������ , order by �Ƨ�*/
select empno,ename,job,sal,deptno,
	case
		when sal <= 1500 then sal*0.05
		when sal > 1500 and sal <= 2000 then sal*0.06
		when sal > 2001 and sal <= 3000 then sal*0.1
		else sal*0.15
	end 'Tex'
from emp
where sal>2000
order by sal;


/* between , in , like */
select empno,ename,job,sal,deptno
from emp
where sal between 2000 and 3000;

select empno,ename,job,sal,deptno
from emp
where sal in(800,1250,3000);

select empno,ename,job,sal,deptno
from emp
where ename like '_U%'; /* �ĤG�Ӧr�O U �� */
/*
	%A%		���N�r��A��
	A%		�r����A��
	%A		�r����A��
	__A%	�ĤG�Ӧr��A��
*/


/* �� null */
select * from emp where comm = null;	/* ���� null ��� null �N�⵲�G�@�ˡA�^�Ǥ]�O null */
select * from emp where comm is null;	/* ���T �P�_ null �����n�αM�Ϊ� is null */


/* order by �Ƨ�: ���B�O�W�B��m */
select * from emp order by sal;			/* �q�{�p��j */
select * from emp order by sal desc;	/* �j��p */

select * from emp order by deptno, sal;	/* ��ӥH�W���� ���Ƴ��� -> �P�������A���~���ơA�ݭn�ɥi�H�U�ۥ[ desc */

select ename,job,sal,sal*12  annual		/* �O�W�ƧǡAannual �o��Ƨ� */
from emp 
order by annual;

select ename,job,sal,sal*12  annual		/* ��m�Ƨ�: �q 1 �}�l�A 3 �O sal �Asal �o��Ƨ� */
from emp 
order by 3;


/* �e n �W top , offset-fetch */

/* top ( SQL server �ϥΡA�D�з� ) */
select top(2) ename,job,sal,sal*12  annual				/* ���e��W�A�u����� */
from emp 
order by sal desc;

select top(2) with ties ename,job,sal,sal*12  annual	/* ���e��W�A��ɦ����ƥi�H�]�t */
from emp 
order by sal desc;

/* offset-fetch �t�X order by �ϥΡA��ĳ�ϥ� */

select ename,job,sal,sal*12  annual	
from emp 
order by sal desc 
offset 1 rows			/* ���L 1 row */
fetch next 5 rows only;	/* �� 5 row */


/* ��� */

/* �r���� */
select ename, job, sal
from emp
where left(ename,1)='A'; /* ��}�Y��A */

select ename, job, sal
from emp
where right(ename,1)='n'; /* �쵲����n */

select ename, job, sal
from emp
where substring(ename,2,1)='a'; /* ��ĤG�r��A */

select len('This is a �j�Ptest'),datalength('This is a �j�Ptest') /* ��r����� */

select * 
from emp
where charindex('a',ename)=1;	/* ��Ĥ@�Ӧr�� a �� */

select replace('This is a test','is','as'); /* �m��: is ������ as */

select lower('This is a test');	/* �q�q�ܤp�g */
select upper('This is a test'); /* �q�q�ܤj�g */

select ltrim('   This is a test   ')	/* ��������ť� */
select Rtrim('   This is a test   ')	/* �����k��ť� */
select ltrim(Rtrim('   This is a test   '))	/* ��������ť� */

select replicate(ename,3) from emp;	/* ���Ʀr�� */

/* select ename+sal+comm from emp; */ /* �� null �X�{�|Error */
select concat(ename,sal,comm) from emp;	/* ��Ҧ����ন�r��Bnull��Ŧr��A�æ�@�_ */


/* �ƭȸ�� */
select round(12345.6789,1);		/* �|�ˤ��J��� n �� */
select ABS(-50);	/* ������� */
select ceiling(3.14);	/* �V�W���� */	
select floor(3.14);		/* �V�U���� */

/* �ɶ� */
select getdate();		/* local �ɶ� - �ھ� server ��a�ɶ� */
select getutcdate();	/* ��L�ªv�ɶ� */

select * from emp where datename(year,hiredate)='1982';	/* datename()�u���Y�خɶ��C��1982�~�i���q�� */

select * from emp where year(hiredate)='1982';			/* year()�u���ɶ����~�C��1982�~�i���q�� */

/* group ��� */

select count(*),count(mgr),count(distinct mgr) from emp;
/* �`�@14�������Amgr �D��null�Ȧ��X�� �B mgr �̭��D��null�Ȥ��i���� */