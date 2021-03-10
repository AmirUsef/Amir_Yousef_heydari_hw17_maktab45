SELECT e1.name as employee,e2.name as manager FROM self_join.employee as e1
join self_join.employee as e2 on e1.manager_id = e2.id;

SELECT e1.name as employee,e2.name as manager FROM self_join.employee as e1
left join self_join.employee as e2 on e1.manager_id = e2.id;

SELECT e.name FROM self_join.employee as e
where e.id NOT IN (SELECT e2.manager_id from self_join.employee as e2 join self_join.employee as e3 on e2.manager_id = e3.id);

SELECT manager_id as manager,count(manager_id) as employee_numbers FROM self_join.employee as e where e.manager_id > 0
GROUP BY manager_id
ORDER BY manager_id;

WITH RECURSIVE cte (manager_id) AS (
    SELECT manager_id FROM employee
    UNION ALL
    SELECT e.manager_id FROM cte c
    JOIN employee e ON c.manager_id = e.id
)
SELECT manager_id as manager, count(*) as employee_numbers FROM cte as c where c.manager_id > 0
GROUP BY manager_id
ORDER BY manager_id;
