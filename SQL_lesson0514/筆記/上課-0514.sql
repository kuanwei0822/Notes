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


/* 加入 where 條件塞選 , order by 排序*/
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
where ename like '_U%'; /* 第二個字是 U 的 */
/*
	%A%		任意字為A的
	A%		字首為A的
	%A		字尾為A的
	__A%	第二個字為A的
*/


/* 找 null */
select * from emp where comm = null;	/* 錯的 null 比較 null 就算結果一樣，回傳也是 null */
select * from emp where comm is null;	/* 正確 判斷 null 必須要用專用的 is null */


/* order by 排序: 欄位、別名、位置 */
select * from emp order by sal;			/* 默認小到大 */
select * from emp order by sal desc;	/* 大到小 */

select * from emp order by deptno, sal;	/* 兩個以上排續 先排部門 -> 同部門的再用薪水排，需要時可以各自加 desc */

select ename,job,sal,sal*12  annual		/* 別名排序，annual 這欄排序 */
from emp 
order by annual;

select ename,job,sal,sal*12  annual		/* 位置排序: 從 1 開始， 3 是 sal ，sal 這欄排序 */
from emp 
order by 3;


/* 前 n 名 top , offset-fetch */

/* top ( SQL server 使用，非標準 ) */
select top(2) ename,job,sal,sal*12  annual				/* 取前兩名，只取兩個 */
from emp 
order by sal desc;

select top(2) with ties ename,job,sal,sal*12  annual	/* 取前兩名，邊界有重複可以包含 */
from emp 
order by sal desc;

/* offset-fetch 配合 order by 使用，建議使用 */

select ename,job,sal,sal*12  annual	
from emp 
order by sal desc 
offset 1 rows			/* 跳過 1 row */
fetch next 5 rows only;	/* 取 5 row */


/* 函數 */

/* 字串資料 */
select ename, job, sal
from emp
where left(ename,1)='A'; /* 抓開頭為A */

select ename, job, sal
from emp
where right(ename,1)='n'; /* 抓結尾為n */

select ename, job, sal
from emp
where substring(ename,2,1)='a'; /* 抓第二字為A */

select len('This is a 大同test'),datalength('This is a 大同test') /* 算字串長度 */

select * 
from emp
where charindex('a',ename)=1;	/* 找第一個字為 a 的 */

select replace('This is a test','is','as'); /* 置換: is 都換成 as */

select lower('This is a test');	/* 通通變小寫 */
select upper('This is a test'); /* 通通變大寫 */

select ltrim('   This is a test   ')	/* 拿掉左邊空白 */
select Rtrim('   This is a test   ')	/* 拿掉右邊空白 */
select ltrim(Rtrim('   This is a test   '))	/* 拿掉兩邊空白 */

select replicate(ename,3) from emp;	/* 重複字串 */

/* select ename+sal+comm from emp; */ /* 有 null 出現會Error */
select concat(ename,sal,comm) from emp;	/* 把所有值轉成字串、null轉空字串，並串一起 */


/* 數值資料 */
select round(12345.6789,1);		/* 四捨五入到第 n 位 */
select ABS(-50);	/* 取絕對值 */
select ceiling(3.14);	/* 向上取整 */	
select floor(3.14);		/* 向下取整 */

/* 時間 */
select getdate();		/* local 時間 - 根據 server 當地時間 */
select getutcdate();	/* 格林威治時間 */

select * from emp where datename(year,hiredate)='1982';	/* datename()只取某種時間。找1982年進公司的 */

select * from emp where year(hiredate)='1982';			/* year()只取時間的年。找1982年進公司的 */

/* group 函數 */

select count(*),count(mgr),count(distinct mgr) from emp;
/* 總共14筆紀錄，mgr 非空null值有幾筆 、 mgr 裡面非空null值不可重複 */