package com.ok.ems.service.impl;

import com.ok.ems.dto.EmployeeDto;
import com.ok.ems.entity.Employee;
import com.ok.ems.exception.ResourceNotFoundException;
import com.ok.ems.mapper.EmployeeMapper;
import com.ok.ems.repo.EmployeeRepo;
import com.ok.ems.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

	private EmployeeRepo employeeRepo;


	@Override
	public EmployeeDto createEmployee(EmployeeDto employeeDto) {

		Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
		Employee savedEmployee = employeeRepo.save(employee);

		return EmployeeMapper.mapToEmployeeDto(savedEmployee);

	}

	@Override
	public EmployeeDto getEmployeeById(Long employeeId) {

		Employee employee = employeeRepo.findById(employeeId)
													.orElseThrow(
				() ->new ResourceNotFoundException("Employee not found with id: " + employeeId));

		return EmployeeMapper.mapToEmployeeDto(employee);

	}

	@Override
	public List<EmployeeDto> getAllEmployees() {

		List<Employee> employees = employeeRepo.findAll();

		return employees
						.stream()
						.map(emp -> EmployeeMapper.mapToEmployeeDto(emp))
						.collect(Collectors.toList());

	}

	@Override
	public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee) {

		Employee employee = employeeRepo.findById(employeeId)
						.orElseThrow(
										() ->new ResourceNotFoundException("Employee not found with id: " + employeeId)
						);

		employee.setFirstName(updatedEmployee.getFirstName());
		employee.setLastName(updatedEmployee.getLastName());
		employee.setEmail(updatedEmployee.getEmail());

		Employee updatedEmployeeObj = employeeRepo.save(employee);

		return EmployeeMapper.mapToEmployeeDto(updatedEmployeeObj);

	}

	@Override
	public void deleteEmployee(Long employeeId) {

		Employee employee = employeeRepo.findById(employeeId)
						.orElseThrow(
										() ->new ResourceNotFoundException("Employee not found with id: " + employeeId)
						);

		employeeRepo.delete(employee);

	}
}
