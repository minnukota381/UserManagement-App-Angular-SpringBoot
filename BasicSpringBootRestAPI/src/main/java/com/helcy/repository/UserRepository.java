package com.helcy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.helcy.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
