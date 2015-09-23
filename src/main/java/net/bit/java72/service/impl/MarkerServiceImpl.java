package net.bit.java72.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.bit.java72.dao.MarkerDao;
import net.bit.java72.domain.Marker;
import net.bit.java72.domain.Member;
import net.bit.java72.service.MarkerService;

@Service 
public class MarkerServiceImpl implements MarkerService{
@Autowired MarkerDao mapDao;

  @Override
  public List<Marker> markMyMarker() {
    
    return mapDao.markMyMarker();
  }


}
