import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function AdminHome() {
  const { t,} = useTranslation();

  return (
    <div>
      <Button as={Link} to="/admin/add-product" variant="outline-secondary" >{t("add-product")}</Button>
      <Button as={Link} to="/admin/maintain-products" variant="outline-primary" >{t("maintain-products")}</Button>
      <Button as={Link} to="/admin/maintain-categories"  variant="outline-primary" >{t("maintain-categories")}</Button>
      <Button as={Link} to="/admin/maintain-shops"  variant="outline-dark" >{t("maintain-shops")}</Button>

    </div>
  )
}

export default AdminHome