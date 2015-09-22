package net.bit.java72.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.bit.java72.dao.MapDao;
import net.bit.java72.domain.Marker;
import net.bit.java72.service.MapService;

@Service 
public class MapServiceImpl implements MapService{
@Autowired MapDao mapDao;

  @Override
  public List<Marker> markMyMarker() {
    
    return mapDao.markMyMarker();
  }

}
