package com.info.videoquery.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="user")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, length = 50)
    private String username;

    @Column(length = 100)
    private String password;

    @Column
    private boolean activated;

    @ManyToMany
    @JoinTable(
            name = "user_authority",
            joinColumns = {@JoinColumn(name = "id", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name="authority_name", referencedColumnName = "authority_name")}
    )
    private Set<Authority> authorities;
}
